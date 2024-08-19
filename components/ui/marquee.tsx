import { CSSProperties } from "react";

type MarqueeProps = {
  children: string;
  duplicate?: number;
  duration?: number;
};

export function Marquee({
  children,
  duplicate = 2,
  duration = 10_000,
}: MarqueeProps) {
  const words = children.split(" ");

  return (
    <div className="*:animate-ticker-single flex -translate-x-1/3 text-nowrap text-[12vw] font-semibold tracking-[-.5rem] *:flex-none *:pr-32">
      <h1
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        {words.map((word, i) => (
          <span
            key={word + i}
            className="animate-slide-in inline-block translate-y-full transition-transform"
            style={
              {
                "--char-index": (duplicate + 1 - 1) * words.length + i,
                "--slidein-delay": "calc(.18s*var(--char-index))",
              } as CSSProperties
            }
          >
            {word + (i !== words.length - 1 ? "\u00A0" : "")}
          </span>
        ))}
      </h1>
      {Array.from(Array(duplicate).keys()).map((dupItem) => (
        <div
          key={`duplicate_${dupItem}`}
          style={{
            animationDuration: `${duration}ms`,
          }}
        >
          {words.map((word, i) => (
            <span
              key={word + i}
              className="animate-slide-in inline-block translate-y-full transition-transform"
              style={
                {
                  "--char-index": (dupItem + 1 - 1) * words.length + i,
                  "--slidein-delay": "calc(.18s*var(--char-index))",
                } as CSSProperties
              }
            >
              {word + (i !== words.length - 1 ? "\u00A0" : "")}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
