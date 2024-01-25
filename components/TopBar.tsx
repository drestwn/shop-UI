"use client";
import styles from "../components/TopBar.module.css";
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
          <span className="text-tertiary">© 2024 Goods.wtf → Beta 0.1.5</span>
          <span className="text-tertiary">
            View website{" "}
            <a href="" target="_blank">
              stats
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
