"use client";
import CardItem from "@/components/CardItem";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../../components/CardItem.module.css";
import TopBar from "@/components/TopBar";

export default function brand({ params }: { params: { brand: string } }) {
  console.log(brand);
  const [isStaffPick, setIsStaffPick] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.gridPage}>
        <TopBar />
        <CardItem isStaffPick={isStaffPick} />
      </div>
    </div>
  );
}
