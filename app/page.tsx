"use client";
import CardItem from "@/components/CardItem";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
interface Product {
  id: number;
  name: string;
  // Add other properties as needed
}

// Function to fetch products, using environment variable for URL
const url = process.env.NEXT_PUBLIC_HOST_URL;
async function fetchProducts(): Promise<Product[]> {
  if (!url) {
    throw new Error("API URL is not defined in environment variables");
  }
  try {
    const response = await fetch(url + "/products");
    const data = await response.json();
    return data.slice(0, 15) as Product[];
  } catch (error) {
    console.error("Error fetching data:product", error);
    throw error; // Re-throw the error for handling in the component
  }
}

export default function Home() {
  const router = useRouter();
  const [dataProduct, setDataProduct] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts()
      .then((limitedData) => {
        console.log(limitedData);
        setDataProduct(limitedData);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
        // Handle error state here if needed
      });
  }, []);

  const handleItemClick = (item: any) => {
    console.log("clicked item", item);
    router.push(`product/${item}`);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridPage}>
          <TopBar />

          {dataProduct.map((data: any) => (
            <CardItem
              key={data.id}
              title={data.name}
              brand={data.brands}
              category={data.category.name}
              price={data.price}
              isStaffPick={true}
              mainImg={data.images}
              onClick={() => handleItemClick(data.id)}
            />
          ))}
        </div>
      </div>
      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
      />
    </>
  );
}
