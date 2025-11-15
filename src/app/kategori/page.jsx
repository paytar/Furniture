// category/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import HomeProductCards from "../components/HomeProductCards";

const CategoryPage = () => {
  const [uniqueCategoryProducts, setUniqueCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        // Kategorilere göre ilk ürünleri filtrele
        const categoryMap = {};
        const firstCategoryProducts = data.products.filter((product) => {
          if (!categoryMap[product.category]) {
            categoryMap[product.category] = true;
            return true; // İlk defa görülen kategorideki ürünler eklenecek
          }
          return false; // Aynı kategorideki diğer ürünler dahil edilmeyecek
        });

        setUniqueCategoryProducts(firstCategoryProducts);
      } catch (error) {
        console.error("Ürünler yüklenirken bir hata oluştu:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Kategorilerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueCategoryProducts.map((product) => (
            <HomeProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
