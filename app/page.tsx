"use client";
import CardItem from "@/components/CardItem";
import styles from "./page.module.css";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Home() {
  const url: any = process.env.NEXT_PUBLIC_HOST_URL;
  console.log(url, "url");

  const router = useRouter();
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    // setLoading(true);
    fetch(url) // Adjust the endpoint according to your setup
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const limitedData = data.slice(0, 15);
        setDataProduct(limitedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);
  // console.log(data);
  const [dataDetail, setDataDetail] = useState({});
  const handleItemClick = (item: any) => {
    console.log("clicked item", item);
    router.push(`product/${item.title}`);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridPage}>
          <TopBar />

          {dataProduct.map((data: any) => (
            <CardItem
              key={data.id}
              title={data.title}
              brand="brand"
              category={data.category.name}
              price={data.price}
              isStaffPick={true}
              mainImg={data.images[0]}
              onClick={() => handleItemClick(data)}
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
