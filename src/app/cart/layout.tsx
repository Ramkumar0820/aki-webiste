import CartpageLayout from "@/core/layouts/CartpageLayout";

export default function CartpageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartpageLayout>{children}</CartpageLayout>;
}