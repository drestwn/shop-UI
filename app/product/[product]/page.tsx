"use client";
// Define the structure for the category
interface Category {
  name: string;
}

// Define the structure for the product
interface Product {
  title: string;
  category: Category;
  price: number;
  images: string[]; // Assuming images is an array of strings
}
import CardItem from "@/components/CardItem";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DetailTopBar from "@/components/DetailTopBar";
export default function product() {
  const url: any = process.env.NEXT_PUBLIC_HOST_URL;

  const params = useParams();
  // console.log(params.product);
  // const product = router.state?.product;
  const [product, setProduct] = useState<Product | {}>({}); // Use the Product interface or an empty object
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<Category | {}>({});

  console.log(product, "product1");
  const [isStaffPick, setIsStaffPick] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // setIsLoading(true);F
        const response = await fetch(`${url}/?title=${params.product}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data[0]);
        setProduct(data[0]);
        setImage(data[0].images[0]);
        setCategory(data[0].category);
        // console.log(data[0].category.name);

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
            title={(product as Product).title}
            brand="brand"
            category={(category as Category).name}
            isStaffPick={true}
            mainImg={image}
            price={(product as Product).price}
          />
        )}
      </div>
    </div>
  );
}
