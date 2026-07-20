/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: "#241915",
          espresso: "#37241E",
          parchment: "#F7F0E6",
          ivory: "#FFF9F0",
          taupe: "#B8A696",
          gold: "#B9854B",
          champagne: "#E8D4B8",
          rose: "#9B6D5E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        jewel: "0 24px 70px rgba(36, 25, 21, 0.12)",
        soft: "0 16px 40px rgba(55, 36, 30, 0.10)",
      },
      letterSpacing: {
        product: "0.18em",
        luxe: "0.26em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
      },
    },
  },
  plugins: [],
}
