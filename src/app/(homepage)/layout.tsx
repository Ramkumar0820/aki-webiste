import HomepageLayout from "@/core/layouts/HomepageLayout";

export default function HomepageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomepageLayout>{children}</HomepageLayout>;
}