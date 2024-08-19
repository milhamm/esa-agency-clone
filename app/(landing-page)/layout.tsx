import { Navbar } from "@/components/layouts";
import { Lenis } from "@/components/lenis/lenis";

export default function LandingPageLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Lenis />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
