"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

const ImageSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/02.jpg", alt: "Image 1" },
    { src: "/dubai/3.jpeg", alt: "Image 2" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef]);

  const goToSlide = (index) => {
    instanceRef.current?.moveToIdx(index);
    setCurrentSlide(index);
  };

  return (
    <section className="pt-32 p-8 container mx-auto">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full"
            style={{
              height: "60vh",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Navigasyon Butonları */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#E67E22]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
