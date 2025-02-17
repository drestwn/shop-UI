import styles from "../components/TopBar.module.css";
export default function DetailTopBar() {
  return (
    <div className={styles.hero}>
      <div className="stack Col Gap-16 Dont-Collapse">
        <a className={styles.textTertiary} href="/">
          <i
            className={styles.iconSmallReturnOutlineMaskUiLight}
            aria-label="Return to index"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </i>
          <text className="text-tertiary">Index</text>
        </a>
        {/* <div className="text-primary">
          <em>Sato</em>
        </div> */}
      </div>
      <div className={styles.stackRowFooter}>
        <i className={styles.icon}>*</i>

        <p className={styles.paragraphFooter}>
          <em className="text-ellipsis">Fewer, better things.</em>
          <br />
          <em className="text-ellipsis">Discover beautifully designed</em>
          <br />
          <em className="text-ellipsis">physical products. Updated weekly.</em>
        </p>
        <div className={styles.footerTop}>
          <span className="text-tertiary">@drestwn</span>
          {/* <span className="text-tertiary">
            View website{" "}
            <a href="" target="_blank">
              stats
            </a>
          </span> */}
        </div>
      </div>
    </div>
  );
}
