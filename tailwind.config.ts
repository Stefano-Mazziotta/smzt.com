import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cutive: ["var(--font-cutive)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scrollLeft: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(-50%)" },
        },
        shine: {
          "100%": { left: "125%" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollLeft 30s linear infinite reverse",
        shine: "shine 1s",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
