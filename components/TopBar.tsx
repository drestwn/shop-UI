"use client";
import styles from "../components/TopBar.module.css";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
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
export default function TopBar() {
  return (
    <div className={styles.hero}>
      <div className={styles.stackRow}>
        <div className={styles.stackRowTitle}>
          <span className={styles.stackRowTitleBar}>Categories</span>
          <ul className={styles.list}>
            <li>
              <a className="inline-flex">Tech</a>
            </li>
            <li>
              <a>Life Style</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Workspace</a>
            </li>
            <li>
              <a>Carry</a>
            </li>
            <li>
              <a>Personal</a>
            </li>
          </ul>
        </div>
        <div className={styles.stackRowTitle}>
          <span className={styles.stackRowTitleBar}>Top Brands</span>
          <ul className={styles.list}>
            <li>
              <a>Apple</a>
            </li>
            <li>
              <a>Hardgraft</a>
            </li>
            <li>
              <a>Teenage Engineering</a>
            </li>
            <li>
              <a>Grovemade</a>
            </li>
            <li>
              <a>Carl Friedrik</a>
            </li>
            <li>
              <a>Logitech</a>
            </li>
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
