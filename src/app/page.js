"use client";
import ImageSlider from "./components/Slider";
import HomeProductCards from "./components/HomeProductCards";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [uniqueCategoryProducts, setUniqueCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const categoryMap = {};
        const firstCategoryProducts = data.products.filter((product) => {
          if (!categoryMap[product.category]) {
            categoryMap[product.category] = true;
            return true;
          }
          return false;
        });

        setUniqueCategoryProducts(firstCategoryProducts);
      } catch (error) {
        console.error("Ürünler yüklenirken bir hata oluştu:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ImageSlider />

      <div className="container mx-auto py-8 px-4 font-[Poppins]">
        <div className="flex justify-between items-center pb-8">
          <h2 className="text-4xl md:text-4xl font-bold text-[#c1953b]">
            Kategoriler
          </h2>
          <Link href="/urunler">
            <h1
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#E67E22] to-[#D35400] rounded-lg shadow-lg
               transform duration-300 hover:from-[#D35400] hover:to-[#E67E22] hover:shadow-2xl"
            >
              Tüm Ürünleri Gör
            </h1>
            {/* <h1
              className="px-6 py-3 text-lg font-semibold bg-[#c1953b] rounded-lg shadow-lg
              transform duration-300 "
            >
              Tüm Ürünleri Gör
            </h1> */}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueCategoryProducts.map((product) => (
            <div key={product.id}>
              {/* Her bir ürün, link olmadan render ediliyor */}
              <HomeProductCards product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
