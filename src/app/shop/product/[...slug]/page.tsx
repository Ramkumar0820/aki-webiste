import ProductspageDetailSection from "@/core/pages/ProductspageDetailSection";
import { allProducts } from "@/data/products";  // ← change this
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = Number(slug[0]);
  const product = allProducts.find((p) => p.id === id);  // ← change this

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
      robots: "noindex,nofollow",
    };
  }

  return {
    title: product.title,
    description: product.description,
    robots: "index,follow",
    openGraph: {
      title: product.title,
      description: product.description,
      siteName: "",
      images: [{ url: product.srcUrl || "/default-og.jpg", width: 1200, height: 630, alt: product.title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.srcUrl || "/default-og.jpg"],
      creator: "",
    },
  };
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({  // ← change this
    slug: [String(p.id), p.title.toLowerCase().replace(/\s+/g, "-")],
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const id = Number(slug[0]);

  const productData = allProducts.find((p) => p.id === id);  // ← change this

  if (!productData) {
    notFound();
  }

  const relatedProducts = allProducts.filter(  // ← change this
    (item) => item.mainCategory === productData.mainCategory && item.id !== productData.id
  );

  return (
    <div>
      <main>
        <ProductspageDetailSection
          productData={productData}
          relatedProducts={relatedProducts}
        />
      </main>
    </div>
  );
}