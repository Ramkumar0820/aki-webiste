import CartpageLayout from "@/core/layouts/CartpageLayout";

export default function HomepageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartpageLayout>{children}</CartpageLayout>;
}