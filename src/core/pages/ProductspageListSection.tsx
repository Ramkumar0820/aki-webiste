'use client';

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import ProductCard from "@/components/common/ProductCard";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiSliders } from "react-icons/fi";

import { allProducts } from "@/data/products";

function ProductspageListSection() {
  const searchParams = useSearchParams();

  const type =
    searchParams.get("type") || "trophy";

  const [sortType, setSortType] =
    useState("most-popular");

  const sectionRefs = useRef<
    Record<string, HTMLDivElement | null>
  >({});

  // PRODUCTS BY MAIN CATEGORY
  const filteredProducts = useMemo(() => {
    let products = allProducts.filter(
      (item) =>
        item.mainCategory.toLowerCase() ===
        type.toLowerCase()
    );

    if (sortType === "low-price") {
      products = [...products].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortType === "high-price") {
      products = [...products].sort(
        (a, b) => b.price - a.price
      );
    }

    return products;
  }, [type, sortType]);

  // SUB CATEGORIES
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        filteredProducts
          .map((item) => item.subCategory)
          .filter(Boolean)
      )
    );
  }, [filteredProducts]);

  // GROUP PRODUCTS
  const groupedProducts = useMemo(() => {
    const grouped: Record<string, any[]> = {};

    categories.forEach((category) => {
      grouped[category] =
        filteredProducts.filter(
          (item) =>
            item.subCategory === category
        );
    });

    return grouped;
  }, [categories, filteredProducts]);

  const [activeSection, setActiveSection] =
    useState("");

  // DEFAULT ACTIVE CATEGORY
  useEffect(() => {
    if (
      categories.length &&
      !activeSection
    ) {
      setActiveSection(categories[0]);
    }
  }, [categories, activeSection]);

  // SCROLL DETECTION
// ACTIVE SECTION ON SCROLL
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + 250;

    let currentSection =
      categories[0] || "";

    categories.forEach((category) => {
      const section =
        sectionRefs.current[category];

      if (!section) return;

      const top = section.offsetTop;

      if (scrollPosition >= top) {
        currentSection = category;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  handleScroll();

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, [categories]);

const scrollToSection = (
  category: string
) => {
  const section =
    sectionRefs.current[category];

  if (!section) return;

  const navbarOffset = 120;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

  return (
    <div>
      <div className="max-w-frame mx-auto px-6 xl:px-12">

        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        <BreadcrumbShop />

        <div className="flex md:space-x-5 items-start">

          {/* SIDEBAR */}
          <div className="hidden md:block sticky top-24 min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5">

            <div className="flex items-center justify-between">

              <span className="font-bold text-black text-xl capitalize">
                {type} Categories
              </span>

              <FiSliders className="text-2xl text-black/40" />

            </div>

            <div className="space-y-2">

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    scrollToSection(cat)
                  }
                  className={`w-full text-left px-4 py-3 rounded-xl capitalize transition-all duration-300
                    ${
                      activeSection === cat
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 text-black"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}

            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col w-full space-y-8">

            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:justify-between">

              <div className="flex items-center justify-between">

                <h1 className="font-bold text-2xl md:text-[32px] capitalize">
                  {type} Collection
                </h1>

                <MobileFilters />

              </div>

              <div className="flex flex-col sm:flex-row sm:items-center">

                <span className="text-sm md:text-base text-black/60 mr-3">
                  {filteredProducts.length} Products
                </span>

                <div className="flex items-center">

                  Sort by:

                  <Select
                    defaultValue="most-popular"
                    onValueChange={(
                      value
                    ) =>
                      setSortType(value)
                    }
                  >

                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">

                      <SelectValue />

                    </SelectTrigger>

                    <SelectContent>

                      <SelectItem value="most-popular">
                        Most Popular
                      </SelectItem>

                      <SelectItem value="low-price">
                        Low Price
                      </SelectItem>

                      <SelectItem value="high-price">
                        High Price
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </div>

              </div>

            </div>

            {/* CATEGORY SECTIONS */}
            <div className="space-y-16">

              {categories.map((category) => (
                  <div
                    key={category}
                    data-category={category}
                    className="scroll-mt-32"
                    ref={(el) => {
                      sectionRefs.current[
                        category
                      ] = el;
                    }}
                  >

                  <h2 className="text-3xl font-bold capitalize mb-6 border-b pb-3">
                    {category}
                  </h2>

                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12 xl:gap-9">

                    {groupedProducts[
                      category
                    ]?.map((product) => (
                      <ProductCard
                        key={product.id}
                        data={product}
                      />
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductspageListSection;



// 'use client';
// import React from 'react'
// import { useState } from "react";
// import { useSearchParams } from "next/navigation";

// import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import MobileFilters from "@/components/shop-page/filters/MobileFilters";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// import { FiSliders } from "react-icons/fi";

// import ProductCard from "@/components/common/ProductCard";

// import { allProducts } from "@/data/products";

// const PRODUCTS_PER_PAGE = 6;

// function ProductspageListSection() {
//   const searchParams = useSearchParams();

//   // MAIN CATEGORY
//   const type =
//     searchParams.get("type") || "trophy";

//   // SUB CATEGORY
//   const [selectedCategory, setSelectedCategory] =
//     useState("all");

//   // SORT
//   const [sortType, setSortType] =
//     useState("most-popular");

//   // PAGINATION
//   const [currentPage, setCurrentPage] =
//     useState(1);

//   // FILTER MAIN CATEGORY
//   let filteredProducts = allProducts.filter(
//     (item) => item.mainCategory === type
//   );

//   // FILTER SUB CATEGORY
//   if (selectedCategory !== "all") {
//     filteredProducts = filteredProducts.filter(
//       (item) =>
//         item.subCategory === selectedCategory
//     );
//   }

//   // SORTING
//   if (sortType === "low-price") {
//     filteredProducts = [...filteredProducts].sort(
//       (a, b) => a.price - b.price
//     );
//   }

//   if (sortType === "high-price") {
//     filteredProducts = [...filteredProducts].sort(
//       (a, b) => b.price - a.price
//     );
//   }

//   // DYNAMIC SIDEBAR CATEGORY
//   const categories = [
//     "all",
//     ...Array.from(
//       new Set(
//         allProducts
//           .filter(
//             (item) =>
//               item.mainCategory === type
//           )
//           .map((item) => item.subCategory)
//           .filter((c): c is string => Boolean(c))
//       )
//     ),
//   ];

//   // PAGINATION
//   const totalPages = Math.ceil(
//     filteredProducts.length /
//     PRODUCTS_PER_PAGE
//   );

//   const startIndex =
//     (currentPage - 1) *
//     PRODUCTS_PER_PAGE;

//   const paginatedProducts =
//     filteredProducts.slice(
//       startIndex,
//       startIndex + PRODUCTS_PER_PAGE
//     );

//   return (
//     <div>
//       <div className="max-w-frame mx-auto px-6 xl:px-12">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

//         <BreadcrumbShop />

//         <div className="flex md:space-x-5 items-start">

//           {/* SIDEBAR */}
//           <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">

//             <div className="flex items-center justify-between">
//               <span className="font-bold text-black text-xl capitalize">
//                 {type} Categories
//               </span>

//               <FiSliders className="text-2xl text-black/40" />
//             </div>

//             <div className="space-y-2">

//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => {
//                     setSelectedCategory(cat);
//                     setCurrentPage(1);
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-xl capitalize transition-all
//                     ${selectedCategory === cat
//                       ? "bg-black text-white"
//                       : "hover:bg-gray-100"
//                     }
//                   `}
//                 >
//                   {cat}
//                 </button>
//               ))}

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col w-full space-y-5">

//             {/* TOP */}
//             <div className="flex flex-col lg:flex-row lg:justify-between">

//               <div className="flex items-center justify-between">

//                 <h1 className="font-bold text-2xl md:text-[32px] capitalize">

//                   {selectedCategory === "all"
//                     ? `All ${type} Products`
//                     : `${selectedCategory} ${type}`}

//                 </h1>

//                 <MobileFilters />
//               </div>

//               <div className="flex flex-col sm:items-center sm:flex-row">

//                 <span className="text-sm md:text-base text-black/60 mr-3">
//                   Showing {paginatedProducts.length} of{" "}
//                   {filteredProducts.length} Products
//                 </span>

//                 {/* SORT */}
//                 <div className="flex items-center">

//                   Sort by:

//                   <Select
//                     defaultValue="most-popular"
//                     onValueChange={(value) =>
//                       setSortType(value)
//                     }
//                   >

//                     <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">

//                       <SelectValue />

//                     </SelectTrigger>

//                     <SelectContent>

//                       <SelectItem value="most-popular">
//                         Most Popular
//                       </SelectItem>

//                       <SelectItem value="low-price">
//                         Low Price
//                       </SelectItem>

//                       <SelectItem value="high-price">
//                         High Price
//                       </SelectItem>

//                     </SelectContent>

//                   </Select>

//                 </div>
//               </div>
//             </div>

//             {/* PRODUCTS */}
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

//               {paginatedProducts.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   data={product}
//                 />
//               ))}

//             </div>

//             {/* PAGINATION */}
//             <hr className="border-t-black/10" />

//             <Pagination className="justify-between">

//               <PaginationPrevious
//                 href="#"
//                 className="border border-black/10"
//                 onClick={() =>
//                   setCurrentPage((prev) =>
//                     Math.max(prev - 1, 1)
//                   )
//                 }
//               />

//               <PaginationContent>

//                 {Array.from(
//                   { length: totalPages },
//                   (_, index) => index + 1
//                 ).map((page) => (
//                   <PaginationItem key={page}>

//                     <PaginationLink
//                       href="#"
//                       isActive={
//                         page === currentPage
//                       }
//                       onClick={() =>
//                         setCurrentPage(page)
//                       }
//                     >
//                       {page}
//                     </PaginationLink>

//                   </PaginationItem>
//                 ))}

//               </PaginationContent>

//               <PaginationNext
//                 href="#"
//                 className="border border-black/10"
//                 onClick={() =>
//                   setCurrentPage((prev) =>
//                     Math.min(
//                       prev + 1,
//                       totalPages
//                     )
//                   )
//                 }
//               />

//             </Pagination>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductspageListSection
