"use client";
import { useEffect, useState } from "react";
import styles from "../components/TopBar.module.css";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";

import { signOut } from "firebase/auth";

interface Product {
  id: number;
  name: string;
  // Add other properties as needed
}
interface Category {
  id: number;
  name: string;
  products: Product[];
}
interface User {
  email: string | null;
  provider_id: string | null;
  uid: string;
  displayName: string;
}

interface Auth {
  currentUser: User | null;
}
const url = process.env.NEXT_PUBLIC_HOST_URL;

async function FetchCategory(): Promise<Category[]> {
  try {
    const response = await fetch(url + "/categories");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:category", error);
    throw error; // Re-throw the error for handling in the component
  }
}

export default function TopBar() {
  const router = useRouter();
  const [dataCategory, setDataCategory] = useState<Category[]>([]);
  const [signIn, setSignIn] = useState(false);
  const handleItemCat = (item: any) => {
    console.log("clicked item", item);
    router.push(`category/${item}`);
  };
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // After successful sign-in, you might want to redirect or update UI.
      // For now, just log the user to console for verification
      console.log("User signed in:", auth.currentUser);

      if (auth.currentUser) {
        const data = {
          email: auth.currentUser.email,
          provider_id: auth.currentUser.providerData[0].uid, // Assuming 'provider_id' is Google's user ID
          provider: "google",
          name: auth.currentUser.displayName, // Explicitly setting provider to 'google'
        };
        console.log(data);
        const response = await fetch(url + "/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        setSignIn(true);
      } else {
        console.error("No user data available after sign-in");
        setSignIn(false);
      }
    } catch (error) {
      setSignIn(false);
      console.error("Error signing in:", error);
    }
  };
  // const handleSignInWithGitHub = async () => {
  //   try {
  //     await signInWithPopup(auth, githubProvider);
  //     console.log("User signed in with GitHub", auth.currentUser);
  //     setSignIn(true);
  //     // Additional logic for successful sign-in
  //   } catch (error: any) {
  //     console.error("Error signing in with GitHub:", error);
  //     if (error.code === "auth/account-exists-with-different-credential") {
  //       const email = error.customData.email;
  //       // Use the correct method name from the auth instance
  //       auth
  //         .fetchProvidersForEmail(email)
  //         .then((providers) => {
  //           if (providers.length > 0) {
  //             const provider = new auth[providers[0]]();
  //             signInWithPopup(auth, provider)
  //               .then((userCredential) => {
  //                 // Note: credentialFromError might not be directly available for GitHub,
  //                 // so we use credentialFromResult instead
  //                 const githubCredential =
  //                   GithubAuthProvider.credentialFromResult(error);
  //                 if (githubCredential) {
  //                   userCredential.user
  //                     .linkWithCredential(githubCredential)
  //                     .then(() => {
  //                       console.log(
  //                         "GitHub account linked to existing account"
  //                       );
  //                       setSignIn(true); // Set signIn state to true if linking is successful
  //                     })
  //                     .catch((linkError) => {
  //                       console.error(
  //                         "Error linking GitHub account:",
  //                         linkError
  //                       );
  //                       setSignIn(false); // Set signIn to false if linking fails
  //                     });
  //                 } else {
  //                   console.error(
  //                     "Failed to create GitHub credential from error"
  //                   );
  //                   setSignIn(false);
  //                 }
  //               })
  //               .catch((signInError) => {
  //                 console.error(
  //                   "Error signing in with existing provider:",
  //                   signInError
  //                 );
  //                 setSignIn(false);
  //               });
  //           } else {
  //             console.error("No existing providers found for this email");
  //             setSignIn(false);
  //           }
  //         })
  //         .catch((fetchError) => {
  //           console.error("Error fetching sign-in methods:", fetchError);
  //           setSignIn(false);
  //         });
  //     } else {
  //       setSignIn(false);
  //     }
  //   }
  // };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSignIn(false);
      // Here you might want to redirect to the home page or login page,
      // update your application state, or perform any other necessary action.
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    console.log(signIn); // This will log the updated state
  }, [signIn]);
  useEffect(() => {
    FetchCategory()
      .then((limitedData) => {
        console.log(limitedData, "category data");
        setDataCategory(limitedData);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
        // Handle error state here if needed
      });
  }, []);
  return (
    <div className={styles.hero}>
      <div className={styles.stackRow}>
        <div className={styles.stackRowTitle}>
          <span className={styles.stackRowTitleBar}>Categories</span>
          <ul className={styles.list}>
            {dataCategory.map((data: any) => (
              <li key={data.id} onClick={() => handleItemCat(data.id)}>
                <a key={data.id}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles.stackRowTitle}>
          <span className={styles.stackRowTitleBar}>Categories</span>
          <ul className={styles.list}>
            {dataCategory.map((data: any) => (
              <li key={data.id} onClick={() => handleItemCat(data.id)}>
                <a key={data.id}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div className={styles.stackRowFooter}>
        <i className={styles.icon}>*</i>

        <p className={styles.paragraphFooter}>
          <em>Fewer, better things.</em>
          <br />
          Discover beautifully designed
          <br />
          physical products. Updated weekly.
        </p>
        <div className={styles.footerTop}>
          <span className="text-tertiary">@drestwn</span>
          {signIn === false && (
            <div>
              <button
                onClick={handleSignInWithGoogle}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Sign in with Google
              </button>
            </div>
          )}

          {/* {signIn === false && (
            <div>
              <button
                onClick={handleSignInWithGitHub}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Sign in with GitHub
              </button>
            </div>
          )} */}
          {signIn === true && (
            <div>
              <button
                onClick={handleSignOut}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
