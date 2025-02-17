"use client";
import CardItem from "@/components/CardItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";
import { useParams } from "next/navigation";
import DetailTopBar from "@/components/DetailTopBar";
interface Category {
  name: string;
}
interface Product {
  name: string;
  category: Category;
  price: number;
  images: string[];
  brans: string;
  products: []; // Assuming images is an array of strings
}
const url = process.env.NEXT_PUBLIC_HOST_URL;

async function FetchProductCategory(params: {
  category: string | string[];
}): Promise<Product> {
  try {
    const response = await fetch(`${url}/categories/${params.category}`);
    const data = await response.json();
    if (data.length === 0) {
      throw new Error("Product not found");
    }

    return data as Product;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default function Category() {
  const [isStaffPick, setIsStaffPick] = useState(true);
  const [dataProduct, setDataProduct] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState(String);
  const params = useParams();
  useEffect(() => {
    FetchProductCategory({ category: params.category })
      .then((data) => {
        setCategoryName(data.name);
        setDataProduct(data.products);
      })
      .catch((error) => {
        console.error("Failed to fetch product detail:", error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.gridPage}>
        <DetailTopBar />
        {dataProduct.map((data: any) => {
          return (
            <CardItem
              key={data.id}
              title={data.name}
              brand={data.brands}
              category={categoryName}
              price={data.price}
              isStaffPick={true}
              mainImg={data.images}
            />
          );
        })}
      </div>
    </div>
  );
}
