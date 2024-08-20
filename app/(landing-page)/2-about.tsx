"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { SplitText } from "@/components/ui/split-text";

export function SectionAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative -mt-[20svh] flex bg-black pb-20">
      <div className="container mx-auto flex flex-col gap-52">
        <div ref={ref}>
          <h2 className="mr-32 inline-block text-[1.2vw]">This is ESE</h2>
          <SplitText
            initial={{ y: "100%" }}
            animate={isInView ? "visible" : undefined}
            variants={{
              visible: (i) => ({
                y: "0%",
                transition: {
                  mass: 10,
                  delay: i * 0.07,
                },
              }),
            }}
            className="inline text-balance text-[4vw] font-light leading-[5rem] tracking-tighter"
          >
            Culture-driven, creative and competitive. Our digital agency creates
            impact for brands. In the disciplines Websites, social media,
            content marketing, campaigning and branding. Between timeless and
            zeitgeist. When we communicate: Effectively. Quick witted.
            Ambitious. This is ESE Agency.
          </SplitText>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="grid w-full flex-none grid-cols-4 gap-4">
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
            <div className="aspect-[2/3] bg-red-400"></div>
          </div>
          <div>View All</div>
        </div>
      </div>
      <div className="absolute inset-[auto_0%_100%] h-[200px] w-full bg-gradient-to-t from-black to-black/0"></div>
    </section>
  );
}
