import { productsData } from "@/data/products";

import ProductListSec from "@/components/common/ProductListSec";

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";

import Header from "@/components/product-page/Header";

import Tabs from "@/components/product-page/Tabs";

import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {

  const { slug } = await params;

  const productData = productsData.find(
    (product) =>
      product.id === Number(slug[0])
  );

  if (!productData) {
    notFound();
  }

  // RELATED PRODUCTS
  const relatedProducts =
    productsData.filter(
      (item) =>
        item.mainCategory ===
          productData.mainCategory &&
        item.id !== productData.id
    );

  return (
    <main>

      <div className="max-w-frame mx-auto px-4 xl:px-0">

        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        <BreadcrumbProduct
          title={productData.title}
        />

        {/* PRODUCT HEADER */}
        <section className="mb-11">

          <Header data={productData} />

        </section>

        {/* TABS */}
        <Tabs product={productData} />

      </div>

      {/* RELATED PRODUCTS */}
      <div className="mb-[50px] sm:mb-20">

        <ProductListSec
          title="You might also like"
          data={relatedProducts}
        />

      </div>

    </main>
  );
}