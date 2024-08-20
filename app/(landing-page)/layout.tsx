"use client";

import { motion, useMotionValue } from "framer-motion";

import { Footer, Navbar } from "@/components/layouts";
import { Lenis } from "@/components/lenis/lenis";

export default function LandingPageLayout({
  children,
}: React.PropsWithChildren) {
  const scale = useMotionValue(1);
  const borderRadius = useMotionValue(0);

  return (
    <Lenis>
      <Navbar />
      <motion.main
        style={{ scale, borderRadius }}
        className="origin-bottom overflow-clip"
      >
        {children}
      </motion.main>
      <Footer scale={scale} borderRadius={borderRadius} />
    </Lenis>
  );
}
