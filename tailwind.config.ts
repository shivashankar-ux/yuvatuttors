import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:    "#FFF9F4",
        rose:     "#FFD6D6",
        peach:    "#FFE4CC",
        butter:   "#FFF3CC",
        mint:     "#D4F5E2",
        sky:      "#D0EEFF",
        lavender: "#E8D8FF",
        lilac:    "#F0E6FF",
        ink:      "#1A1025",
        ink2:     "#2D1F3D",
        muted:    "#7A6E85",
        violet:   "#9b72cf",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
      backgroundImage: {
        "gradient-pastel":
          "linear-gradient(120deg, #c084fc, #818cf8, #38bdf8)",
      },
      boxShadow: {
        "card-lavender": "0 24px 64px rgba(232,216,255,0.5)",
        "card-mint":     "0 24px 64px rgba(212,245,226,0.5)",
        "card-sky":      "0 24px 64px rgba(208,238,255,0.5)",
        "card-rose":     "0 24px 64px rgba(255,214,214,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
