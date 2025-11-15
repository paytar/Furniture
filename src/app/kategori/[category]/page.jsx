"use client";
import { useEffect, useState } from "react";
import HomeProductCards from "../../components/HomeProductCards";
import Card from "@/app/components/Card";

export default function CategoryPage({ params }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      const resolvedParams = await params; // params'ı Promise'den çıkar
      setCategory(resolvedParams.category);
    };

    fetchCategory();
  }, [params]);

  useEffect(() => {
    if (category) {
      console.log(category)
      const fetchProducts = async () => {
        try {
          const response = await fetch("/data.json");
          const data = await response.json();
          // Seçilen kategoriye göre ürünleri filtrele
          const categoryProducts = data.products.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          );
          console.log(data.products)
          setFilteredProducts(categoryProducts);
        } catch (error) {
          console.error("Ürünler yüklenirken bir hata oluştu:", error);
        }
      };
      fetchProducts();
    }
  }, [category]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center pb-8">
        {category} Kategorisi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
