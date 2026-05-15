import ProductspageDetailSection from "@/core/pages/ProductspageDetailSection";
import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = Number(slug[0]);
  const product = productsData.find((p) => p.id === id);

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
    //   url: ``,
      siteName: "",
      images: [
        {
          url: product.srcUrl || "/default-og.jpg",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
    //   canonical: ``,
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
  return productsData.map((p) => ({
    slug: [String(p.id), p.title.toLowerCase().replace(/\s+/g, "-")],
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const id = Number(slug[0]); // "101" from ["101", "Gold-Metal-Trophy-..."]
  console.log("slug:", slug);
  console.log("all IDs:", productsData.map(p => p.id));

  const productData = productsData.find((p) => p.id === id);

  if (!productData) {
    notFound();
  }

  const relatedProducts = productsData.filter(
    (item) =>
      item.mainCategory === productData.mainCategory && item.id !== productData.id
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