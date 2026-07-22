/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        cream: "#F1EADD",
        sand: "#E4D9C4",
        espresso: "#1D1610",
        cocoa: "#55483A",
        taupe: "#8A7B67",
        gold: "#A5824A",
        "gold-deep": "#8A6C3B",
        "gold-light": "#C9AE7E",
        hairline: "#E3D8C3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "lift": "0 18px 40px -18px rgba(29, 22, 16, 0.25)",
        "drawer": "-24px 0 60px -30px rgba(29, 22, 16, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
}
