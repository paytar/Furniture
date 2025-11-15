"use client";

import Image from "next/image";
import Link from "next/link";

const SimilarProducts = ({ similarProducts }) => {
  if (!similarProducts || similarProducts.length === 0) {
    return <div>Benzer ürün bulunamadı.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {similarProducts.map((product) => (
        <Link
          key={product.id}
          href={`/urunler/${product.slug}`}
          className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform group hover:scale-105 hover:shadow-2xl"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-96 object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#CCA648] hover:text-[#E67E22] transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.category}</p>
          </div>
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transform translate-y-full
            group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <span className="text-white font-semibold text-lg">
              Ürünü İncele
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarProducts;
