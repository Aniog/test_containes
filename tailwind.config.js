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
          ink: "#201916",
          espresso: "#33241d",
          cream: "#fbf6ee",
          linen: "#f1e7d8",
          parchment: "#fffaf3",
          gold: "#b8864b",
          champagne: "#dfc59d",
          clay: "#8b6652",
          hairline: "#ded0bd",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(32, 25, 22, 0.10)",
        glow: "0 18px 40px rgba(184, 134, 75, 0.16)",
      },
      letterSpacing: {
        luxe: "0.18em",
        widerLuxe: "0.28em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
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
