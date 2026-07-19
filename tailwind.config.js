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
          ivory: "#F8F1E8",
          porcelain: "#FFF9F1",
          pearl: "#EFE4D6",
          espresso: "#251713",
          taupe: "#77675D",
          champagne: "#C9A56A",
          clay: "#9A5B42",
          smoke: "#3E302B",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(37, 23, 19, 0.10)",
        glow: "0 18px 50px rgba(201, 165, 106, 0.22)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatIn: "floatIn 700ms ease-out both",
      },
    },
  },
  plugins: [],
}
