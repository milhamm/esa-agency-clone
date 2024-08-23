"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { SplitText } from "@/components/ui/split-text";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { power: 10 } },
};

export function SectionAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative -mt-[20svh] flex bg-black pb-52">
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
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid w-full flex-none grid-cols-4 gap-4"
          >
            {Array.from(Array(8).keys()).map((k) => (
              <motion.div
                variants={listItemVariant}
                key={k}
                className="group relative isolate aspect-[2/3] overflow-hidden rounded-xl"
              >
                <Link href="/work/workId">
                  <Image
                    className="z-10 will-change-transform group-hover:scale-110 group-hover:opacity-85"
                    style={{
                      transition: "transform .3s cubic-bezier(.215,.61,.355,1)",
                    }}
                    src="/works/work1.jpg"
                    alt="Work Item"
                    fill
                  />
                  <div className="relative z-50 flex h-full items-center justify-center">
                    <div className="rotate-45 rounded-full bg-white p-5 opacity-0 transition-all duration-700 group-hover:rotate-90 group-hover:opacity-100">
                      <Image
                        src="/icons/cross-small.svg"
                        width="10"
                        height="10"
                        alt="Icon cross"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div>View All</div>
        </div>
      </div>
      <div className="absolute inset-[auto_0%_100%] h-[200px] w-full bg-gradient-to-t from-black to-black/0"></div>
    </section>
  );
}
