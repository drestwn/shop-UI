"use client";
import { useEffect, useState } from "react";
import styles from "../components/TopBar.module.css";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
const handleSignInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    // After successful sign-in, you might want to redirect or update UI.
    // For now, just log the user to console for verification
    console.log("User signed in:", auth.currentUser);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

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
const url = process.env.NEXT_PUBLIC_HOST_URL;

async function fetchCategory(): Promise<Category[]> {
  try {
    const response = await fetch(url + "/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:category", error);
    throw error; // Re-throw the error for handling in the component
  }
}

export default function TopBar() {
  const router = useRouter();
  const [dataCategory, setDataCategory] = useState<Category[]>([]);
  const handleItemCat = (item: any) => {
    console.log("clicked item", item);
    router.push(`category/${item}`);
  };
  useEffect(() => {
    fetchCategory()
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
          {/* <span className="text-tertiary">
            View website{" "}
            <a href="" target="_blank">
              stats
            </a>
          </span> */}
          <div
            style={
              {
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height: "100vh",
              }
            }
          >
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
        </div>
      </div>
    </div>
  );
}
