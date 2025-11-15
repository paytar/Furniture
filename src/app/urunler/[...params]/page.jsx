import React from "react";
import ProductPage from "@/app/components/ProductPage";

import fs from "fs";
import path from "path";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  if (resolvedParams?.params) {
    const slug = resolvedParams.params[0];

    // Dosyayı doğrudan oku
    const filePath = path.join(process.cwd(), "public", "data.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const foundProduct = data.products.find((item) => item.slug === slug);
    if (foundProduct) {
      return {
        title: foundProduct.seo.title,
        description: foundProduct.seo.meta_description,
        openGraph: {
          title: foundProduct.seo.og_title,
          description: foundProduct.seo.og_description,
          images: [foundProduct.seo.og_image],
        },
        twitter: {
          title: foundProduct.seo.og_title,
          description: foundProduct.seo.og_description,
          images: [foundProduct.seo.og_image],
        },
      };
    }
  }

  return {
    title: "Product not found",
    description: "This product is not available",
  };
}
// Sayfa bileşeni içerisinde async fonksiyon kullanma
const Page = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.params[0];

  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const foundProduct = data.products.find((item) => item.slug === slug);
  let similarProducts = [];

  if (foundProduct) {
    similarProducts = data.products
      .filter(
        (item) => item.category === foundProduct.category && item.slug !== slug
      )
      .slice(0, 5);
  }

  if (!foundProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-4">
      <ProductPage product={foundProduct} similarProducts={similarProducts} />
    </div>
  );
};

export default Page;
