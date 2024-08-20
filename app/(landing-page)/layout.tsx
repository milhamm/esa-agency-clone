"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

import { Footer, Navbar } from "@/components/layouts";
import { Lenis } from "@/components/lenis/lenis";

export default function LandingPageLayout({
  children,
}: React.PropsWithChildren) {
  const scale = useMotionValue(1);
  const borderRadius = useMotionValue(0);

  // Used for resetting scroll position on reload
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Lenis>
      <div>
        <div className="pointer-events-none fixed inset-0 z-[2147483647] bg-[url('https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae88/651d15fb8f27f4a03c14afa4_5d8424ac4ffed73f4d72846e_5c06f51d6e75c933fe05c728_giphy.gif')] bg-[length:480px] bg-fixed opacity-[0.04]"></div>
      </div>
      <Navbar />
      <motion.main
        style={{ scale, borderRadius }}
        className="relative z-20 origin-bottom overflow-clip"
      >
        {children}
      </motion.main>
      <Footer scale={scale} borderRadius={borderRadius} />
    </Lenis>
  );
}
