import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      animation: {
        "ticker-single": "ticker-single linear infinite",
        "slide-in": "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
      keyframes: {
        "ticker-single": {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(-200%)" },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(100%)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
