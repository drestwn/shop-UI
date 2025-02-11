"use client";
import { useEffect, useState } from "react";
import styles from "./CardItem.module.css";
interface CardItemProps {
  title: string;
  brand: string;
  category: string;
  price?: number;
  isStaffPick: boolean;
  mainImg?: string;
}

export default function CardItem(props: CardItemProps) {
  // console.log(props);
  const [isStaffPick, setIsStaffPick] = useState(false);
  useEffect(() => {
    setIsStaffPick(props.isStaffPick);
  }, []);

  return (
    <div
      className={styles.item}
      onClick={() => {
        console.log("CardItem clicked");
        props.onClick();
      }}
    >
      <div className={styles.itemInner}>
        <div className={styles.itemCard}>
          {isStaffPick && (
            <div className={styles.staffPick}>
              <div className={styles.staffPickIcon}>
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
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <a>Staff Pick</a>
            </div>
          )}
          <a
            className={styles.itemImgWrap}
            pirsch-link="card-int-link"
            // href="/items/paist-sensitive-premium-eco-friendly-toohpaste-zero-plastic"
          >
            <div className={styles.imgSpacer}>
              <img
                className="img-main"
                // src="https://bureau.ams3.digitaloceanspaces.com/goods/prod/uploads/store/30fc4c772f0df37bf71410fd026355b0.png"
                src={props.mainImg}
                alt={""}
              />
            </div>
          </a>{" "}
          <div className={styles.itemInfo}>
            <div className={styles.itemInfoTitle}>
              <a
                className="text-small text-tertiary"
                style={{ textDecoration: "none" }}
                // href={`/brand/${props.brand}`}
              >
                {props.brand}
              </a>
              <i
                className="text-small text-tertiary"
                style={{ textDecoration: "none" }}
              >
                ·
              </i>
              <a
                className="text-small text-tertiary"
                // href="/categories/personal"
                style={{ textDecoration: "none" }}
              >
                {props.category}
              </a>
            </div>
            <div className={styles.stackHorizontal}>
              <div className="text-primary">
                <a
                  // href="https://paist.co/products/sensitive?variant=47334079168827?ref=goodswtf"
                  target="_blank"
                  className="text-secondary"
                  pirsch-link="card-ext-link"
                  style={{ textDecoration: "none" }}
                >
                  {props.title}
                </a>
              </div>
              <div className="text-secondary">${props.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
