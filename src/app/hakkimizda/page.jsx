import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-28 font-[Poppins]">
      <div className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-6 md:px-12 lg:px-24 font-sans text-gray-700">
        {/* Başlık */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#B59A62] mb-10 tracking-wide">
          Hakkımızda
        </h1>

        {/* İçerik Kartı */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          {/* İmalathane Bilgisi */}
          <div className="p-8 bg-[#faf5ef]">
            <h2 className="text-2xl font-semibold text-[#B59A62] mb-4">
              Biz Kimiz?
            </h2>
            <p className="text-lg leading-relaxed">
              Ankara'nın mobilya merkezi Siteler'de bulunan imalathanemizden
              Türkiye'nin dört bir yanına özenle hazırlanmış mobilyalar
              üretiyoruz. Ev, ofis ve bahçe mobilyalarımızla yaşam alanlarınıza
              estetik ve konfor katmayı amaçlıyoruz. Kaliteli malzemeler ve
              özgün tasarımlarla, her zevke hitap eden ürünler sunuyoruz.
            </p>
          </div>

          {/* İmalathane Adresi */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-bold text-[#B59A62] mb-2">
              İmalathanemiz
            </h3>
            <p>Örnek Mahallesi, Özgü Sokak. 36/2 Altındağ/ANKARA</p>
            <p className="italic text-sm text-gray-500 mt-2">
              İmalathaneden satış yapılmamaktadır.
            </p>
          </div>

          {/* İletişim Bölümü */}
          <div className="bg-[#faf5ef] p-8 flex flex-col md:flex-row md:justify-between items-start md:items-center border-t border-gray-200">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-[#B59A62]">İletişim</h3>
              <ul className="list-none space-y-1 mt-2">
                <li>
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+905521127548"
                    className="text-[#B59A62] hover:underline"
                  >
                    0 (552) 112 75 48
                  </a>{" "}
                  (WhatsApp)
                </li>
                <li>
                  <strong>E-Posta:</strong>{" "}
                  <a
                    href="mailto:info@vesahome.com"
                    className="text-[#B59A62] hover:underline"
                  >
                    info@vesahome.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              {/* İlgili görsel veya ikonlar (örn. mobilya, ev simgesi) */}
              <Image
              src="/vesalogo2.png"
              alt="Mobilya ikonu"
              width={96}  // 24x4 = 96 (24rem olarak belirlenen ölçüye uygun)
              height={96}
              className="object-contain"
            />
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default AboutPage;
