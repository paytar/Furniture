import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeProductCards = ({ product }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform group">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover"
        width={400}
        height={300}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#CCA648] hover:text-[#E67E22] transition-colors duration-200">
          {product.category}
        </h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        {/* <Link href={`/kategori/${product.category}`}>
          <button className="inline-block bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform">
            Kategorideki Ürünleri İncele
          </button>
        </Link> */}
      </div>
      <Link href={`/kategori/${product.category}`}>
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transform translate-y-full
         group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <span className="text-white font-semibold text-lg">Ürünü İncele</span>
        </div>
      </Link>
    </div>
  );
};

export default HomeProductCards;
