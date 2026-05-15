import ShoppageLayout from "@/core/layouts/ShoppageLayout";

export default function ShoppageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShoppageLayout>{children}</ShoppageLayout>;
}