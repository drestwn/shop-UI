import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridPage}>
          <TopBar />
          <div id="item_246" className={styles.item}>
            <div className={styles.itemInner}>
              <div className={styles.itemCard}>
                <a
                  className={styles.itemImgWrap}
                  pirsch-link="card-int-link"
                  href="/items/paist-sensitive-premium-eco-friendly-toohpaste-zero-plastic"
                >
                  <div className={styles.imgSpacer}>
                    <img
                      className="img-main"
                      src="https://goods.ams3.digitaloceanspaces.com/store/1debba702250189b4bc8b2c94ba7b84f.png"
                      alt={""}
                    />
                  </div>
                </a>{" "}
                <div className={styles.itemInfo}>
                  <div className={styles.itemInfoTitle}>
                    <a className="text-tertiary" href="/brands/paist">
                      PAIST
                    </a>
                    <i className="text-tertiary">·</i>
                    <a className="text-tertiary" href="/categories/personal">
                      Personal
                    </a>
                  </div>
                  <div className={styles.stackHorizontal}>
                    <div className="text-ellipsis">
                      <a
                        href="https://paist.co/products/sensitive?variant=47334079168827?ref=goodswtf"
                        target="_blank"
                        className="text-secondary"
                        pirsch-link="card-ext-link"
                      >
                        Sensitive
                      </a>
                    </div>
                    <div className="text-secondary">$14</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
