"use client";
import CardItem from "@/components/CardItem";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DetailTopBar from "@/components/DetailTopBar";
export default function product() {
  const params = useParams();
  // console.log(params.product);
  // const product = router.state?.product;
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  console.log(product, "product1");
  const [isStaffPick, setIsStaffPick] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // setIsLoading(true);
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/?title=${params.product}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data[0].images[0]);
        setProduct(data[0]);
        setImage(data[0].images[0]);

        // const dataDetail = data.map((data: any) => {
        //   return data;
        // });
        // console.log(dataDetail, "currentProduct");
      } catch (err) {
        // setError(err.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.product]);
  return (
    <div className={styles.container}>
      <div className={styles.gridPage}>
        <DetailTopBar />
        {product && (
          <CardItem
            title={product?.title}
            brand="brand"
            category={product?.category?.name}
            isStaffPick={true}
            mainImg={image}
            price={product?.price}
          />
        )}
      </div>
    </div>
  );
}
