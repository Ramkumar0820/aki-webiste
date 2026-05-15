import ProductspageListSection from "@/core/pages/ProductspageListSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description:
    "",
  robots: "index,follow",

  openGraph: {
    title: "",
    description:
      "",
    url: "",
    siteName: "",
    images: [
      {
        // url: "",
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "",
  },

  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "",
    // images: [""],
    images: [""],
    creator: "",
  },
};

export default function Shoppage() {
  return (
    <div>
      <main>
        <ProductspageListSection />
      </main>
    </div>
  );
}
