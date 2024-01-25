import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridPage}>
          <TopBar />s
        </div>
      </div>
    </>
  );
}
