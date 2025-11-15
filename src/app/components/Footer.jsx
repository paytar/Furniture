"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Şirket Bilgileri */}
        <div>
          <h3 className="text-lg font-bold mb-4">Vesa Home</h3>
          <p className="text-sm">
            Ankara/Altındağ (Siteler) bölgesindeki imalathanemizden tüm
            Türkiye'ye ev, ofis ve bahçe mobilyaları üretiyor, evinize renk
            katıyoruz.
          </p>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2">
            {["/", "/hakkimizda", "/urunler", "/iletisim"].map((path, index) => (
              <li key={index}>
                <Link
                  href={path}
                  className="text-sm transition-colors duration-300 hover:text-[#E67E22]"
                >
                  {path === "/"
                    ? "Anasayfa"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-bold mb-4">İletişim</h3>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-bold">Adres:</span> Örnek Mahallesi, Özgü
              Sokak, 36/2 Altındağ/ANKARA (İMALATHANE)
            </li>
            <li>
              <span className="font-bold">Telefon:</span>{" "}
              <a
                href="https://wa.me/905521127548"
                className="hover:text-[#E67E22] transition-colors duration-300"
              >
                0 (552) 112 75 48 (WHATSAPP)
              </a>
            </li>
            <li>
              <span className="font-bold">E-posta:</span>{" "}
              <a
                href="mailto:info@vesahome.com"
                className="hover:text-[#E67E22] transition-colors duration-300"
              >
                info@vesahome.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <p>
          © 2024 Vesa Home. Tüm hakları saklıdır.{" "}
          <Link
            href="/kvkk"
            className="hover:text-[#E67E22] transition-colors duration-300"
          >
            KVKK Politikası
          </Link>
        </p>
      </div>
    </footer>
  );
}
