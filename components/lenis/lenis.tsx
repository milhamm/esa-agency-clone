"use client";

import { ComponentProps } from "react";

import { ReactLenis } from "@/libs/lenis";

import "lenis/dist/lenis.css";

export function Lenis({
  children,
  options,
}: ComponentProps<typeof ReactLenis>) {
  return (
    <ReactLenis
      root
      options={{
        ...options,
        prevent: (node) => {
          return (
            node.nodeName === "VERCEL-LIVE-FEEDBACK" ||
            node.id === "theatrejs-studio-root"
          );
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
