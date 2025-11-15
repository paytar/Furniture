"use client";
import React, { use, useState, useEffect } from "react";
import Card from "../components/Card";

const AllProductsPage = ({ params }) => {
  const resolvedParams = use(params);

  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProducts(data.products);

        // Kategorileri dinamik olarak belirleme
        const categories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setUniqueCategories(["Tümü", ...categories]);
      } catch (error) {
        console.error("Ürünler yüklenirken bir hata oluştu:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Tüm Ürünlerimiz
        </h1>

        {/* Dinamik Filtreleme Butonları */}
        <div className="flex justify-center mb-6 space-x-4">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              className={`py-3 px-6 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white shadow-lg transform scale-105"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ürünler Grid yapısında listeleniyor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
