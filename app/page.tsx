import CardItem from "@/components/CardItem";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridPage}>
          <TopBar />

          <CardItem title="Paist" />
        </div>
      </div>
    </>
  );
}
