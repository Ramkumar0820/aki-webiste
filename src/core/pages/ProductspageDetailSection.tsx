'use client';
import React from 'react'
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";

function ProductspageDetailSection({ productData, relatedProducts }: { productData: any, relatedProducts: any }) {
  return (
    <div>
      <div className="max-w-frame mx-auto px-4 xl:px-12">

        <hr className="h-px border-t-black/10 mb-5 sm:mb-6" />

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
      <div className="mb-12.5 sm:mb-20">

        <ProductListSec
          title="You might also like"
          data={relatedProducts}
        />
      </div>
    </div>
  )
}

export default ProductspageDetailSection
