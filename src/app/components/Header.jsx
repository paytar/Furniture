"use client"; // Bu satır gerekli

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition duration-500 shadow-md font-[Poppins] ${
        scrolled ? "bg-[#F3F3F3] text-black" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image src="/vesalogo2.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Hamburger Menü İkonu - Sadece Mobil için */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Masaüstü Menü */}
        <nav className="hidden lg:flex space-x-6">
          {["/", "/hakkimizda", "/urunler", "/iletisim"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`transition-colors duration-300  hover:text-[#E67E22] ${
                activeLink === path
                  ? "text-[#E67E22] border-b-2 border-[#E67E22]"
                  : scrolled
                  ? "text-black"
                  : "text-black"
              }`}
              onClick={() => handleLinkClick(path)}
            >
              {path === "/"
                ? "Anasayfa"
                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>
        {/* Mobil Menü - Sağdan Sola Açılır */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-1/2 bg-white p-6 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden shadow-lg`}
        >
          {/* Mobil Menüde Üstte Logo */}
          <div className="flex items-center justify-center mb-4">
            <Link href="/" onClick={() => handleLinkClick("/")}>
              <Image src="/vesalogo2.png" alt="Logo" width={60} height={60} />
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            {["/", "/hakkimizda", "/urunler", "/iletisim"].map(
              (path, index) => (
                <Link
                  key={index}
                  href={path}
                  className="text-gray-700 transition-colors duration-300 hover:text-[#E67E22]"
                  onClick={() => handleLinkClick(path)}
                >
                  {path === "/"
                    ? "Anasayfa"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Arka Plan Bluru */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}
