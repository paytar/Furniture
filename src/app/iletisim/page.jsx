"use client";

import { useState } from "react";

const ContactPage = () => {
  const [workingHours] = useState("Pazartesi - Cuma, 09:00 - 18:00");

  return (
    <div className="container mx-auto py-28 font-[Poppins]">
      <h1 className="text-3xl font-extrabold text-[#CCA648] mb-6">İletişim</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Sol Bölüm: İletişim Bilgileri */}
        <div className="lg:w-1/2 w-full mb-8">
          <h2 className="text-2xl font-semibold text-[#CCA648] mb-4">
            İletişim Bilgileri
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Telefon:</strong>{" "}
            <a
              href="https://wa.me/905521127548"
              className="text-[#CCA648] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              0 (552) 112 75 48 (WhatsApp)
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:info@vesahome.com"
              className="text-[#CCA648] hover:underline"
            >
              info@vesahome.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Adres:</strong> Örnek Mahallesi, Özgü Sokak, 36/2
            Altındağ/ANKARA (İMALATHANE)
          </p>
        </div>

        {/* Sağ Bölüm: Harita */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#CCA648] mb-4">
            Bizimle İletişime Geçin
          </h2>
          <div className="w-full h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12451.460059622794!2d32.8541!3d39.9208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sVESA%20Home!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              title="VESA Home Lokasyon Haritası"
              aria-label="VESA Home Lokasyon Haritası"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Ek Bilgiler Bölümü */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#CCA648] mb-4">
          Diğer Bilgiler
        </h2>
        <p className="text-gray-600">
          Müşteri hizmetleri saatlerimiz: <strong>{workingHours}</strong>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
