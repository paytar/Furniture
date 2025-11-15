"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";

const ProductPage = ({ product, similarProducts }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  if (!product) {
    return <div className="text-center text-xl">Yükleniyor...</div>;
  }

  const handleImageClick = (index) => setSelectedImage(index);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev > 0 ? prev - 1 : product.images.length - 1
          );
        }
        if (e.key === "ArrowRight") {
          setSelectedImage((prev) => (prev + 1) % product.images.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, product.images.length]);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const threshold = 50;
    if (touchStartX - touchEndX > threshold) {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    } else if (touchEndX - touchStartX > threshold) {
      setSelectedImage((prev) =>
        prev > 0 ? prev - 1 : product.images.length - 1
      );
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="container mx-auto py-32 font-[Poppins] text-gray-800">
      <div className="flex flex-col lg:flex-row lg:space-x-8 ">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div
            className="relative mb-6 w-full h-[500px]  overflow-hidden bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={product.images[selectedImage]}
              alt="Product Image"
              layout="fill"
              className="object-contain rounded-lg"
              onClick={toggleModal}
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4 w-auto">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Thumbnail"
                width={80}
                height={80}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-4 transition-transform duration-300 ${
                  selectedImage === index
                    ? "border-blue-500 scale-105 shadow-lg"
                    : "border-gray-300"
                }`}
                onClick={() => handleImageClick(index)}
              />
              
            ))}
          </div>
        </div>
        {/* Info Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 space-y-8 text-gray-800">
          <h1 className="text-3xl font-bold text-[#CCA648] leading-tight lg:text-4xl font-[Poppins]">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-[#CCA648] lg:text-4xl font-[Poppins]">
              Ürün Fiyatı:
            </span>
            <span className="text-4xl font-bold text-green-600">
              {`${product.sale} TL`}
            </span>
          </div>

          <div className="p-4 border border-[#CCA648] rounded-lg bg-[#fdf8e6] shadow-md">
            <h2 className="text-2xl font-semibold text-[#CCA648] mb-3">
              Ürün Bilgileri
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Renk:</strong> {product.technicalDetails.color}
              </p>
              <p>
                <strong>Ölçüler:</strong> {product.technicalDetails.dimensions}
              </p>
              <p>
                <strong>Malzeme:</strong> {product.technicalDetails.material}
              </p>
            </div>
          </div>

          <div className="p-6 mt-8 border-t border-gray-300">
            <h2 className="text-2xl font-semibold text-[#CCA648] mb-4">
              Ürün Hakkında
            </h2>
            <p className="text-gray-700 leading-relaxed">{product.paragraph}</p>
          </div>

          <Link href="/iletisim/">
            <div className="mt-8 flex items-center justify-between bg-blue-50 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-lg font-bold text-blue-700 hover:underline">
                Bize Ulaşın
              </h3>
              <p className="text-gray-700">{product.contactInfo.phone}</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Similar Products */}
      <div className="py-24">
        <h2 className="text-2xl pb-8 font-semibold text-[#CCA648] mb-4 font-[Poppins]">
          Benzer Ürünler
        </h2>
        <SimilarProducts similarProducts={similarProducts} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-h-[calc(100vh-50px)] max-w-4xl mx-auto p-0.5 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 w-12 h-12 right-1 text-white font-extrabold text-4xl z-10 hover:text-red-400 transition-colors duration-200"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={product.images[selectedImage]}
              alt="Product Large"
              layout="responsive"
              width={800}
              height={800}
              className="w-full max-h-[calc(100vh-100px)] object-cover rounded-lg"
            />
            <div className="absolute inset-y-0 left-10 flex items-center">
              <button
                className="text-5xl text-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev > 0 ? prev - 1 : product.images.length - 1
                  );
                }}
              >
                &#8249;
              </button>
            </div>
            <div className="absolute inset-y-0 right-10 flex items-center">
              <button
                className="text-5xl text-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    (prev) => (prev + 1) % product.images.length
                  );
                }}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
