import styles from "../components/TopBar.module.css";
export default function DetailTopBar() {
  return (
    <div className={styles.hero}>
      <div className={styles.stackColGap16DontCollapse}>
        <a className={styles.textTertiary} href="/">
          <i
            className={styles.iconSmallReturnOutlineMaskUiLight}
            aria-label="Return to index"
          ></i>
          Index
        </a>
        <div className={styles.textPrimary}>
          <em>Sato</em>
        </div>
      </div>
      <div className={styles.stackColGap16}>
        <i className={styles.iconMonogramMaskUiDark} aria-hidden="true"></i>
        <div className={styles.stackColGap4}>
          <p className={styles.textPrimary}>
            <em>Fewer, better things.</em> <br />
            Discover beautifully designed <br />
            physical products. Updated weekly.
          </p>
        </div>
        <div className={styles.stackColGap2}>
          <span className={styles.textTertiary}>@drestwn</span>
        </div>
      </div>
    </div>
  );
}
