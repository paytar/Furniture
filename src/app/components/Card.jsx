import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform group">
      {/* Resim oranını sabitlemek için aspect-ratio kullanımı */}
      <div className="relative w-full aspect-[4/4]">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-lg"
        />
      </div>

      {/* Kart içeriği */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 hover:text-[#E67E22] transition-colors duration-200">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Link href={`/urunler/${product.slug}`}>
          {/* <button
            className="inline-block bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white font-medium py-2
            px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform"
          >
            Ürünü İncele
          </button> */}
        </Link>
      </div>

      {/* Hover maskesi (alttan yukarı süzülen) */}
      <Link href={`/urunler/${product.slug}`}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer">
          <span className="text-white font-semibold text-lg">Ürünü İncele</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
