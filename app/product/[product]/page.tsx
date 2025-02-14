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

// Function to fetch products, using environment variable for URL
async function fetchProductDetail(params: {
  product: string | string[];
}): Promise<Product> {
  const url = process.env.NEXT_PUBLIC_HOST_URL;
  if (!url) {
    throw new Error("API URL is not defined in environment variables");
  }
  try {
    const response = await fetch(`${url}/?${params}`);

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Product not found");
    }

    return data[0] as Product;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for handling in the component
  }
}
import CardItem from "@/components/CardItem";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DetailTopBar from "@/components/DetailTopBar";
export default function product() {
  // const url: any = process.env.NEXT_PUBLIC_HOST_URL;
  const params = useParams();
  console.log(params.product);
  const [product, setProduct] = useState<Product | {}>({}); // Use the Product interface or an empty object
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<Category | {}>({});

  const [isStaffPick, setIsStaffPick] = useState(true);

  useEffect(() => {
    fetchProductDetail({ product: params.product })
      .then((fetchedProduct) => {
        setProduct(fetchedProduct);
        setImage(JSON.parse(fetchedProduct.images[0] || ""));
        setCategory(fetchedProduct.category || "");
      })
      .catch((error) => {
        console.error("Failed to fetch product detail:", error);
        // Handle error state here if needed
      });
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
