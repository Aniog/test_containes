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
          ivory: "#F6F0E7",
          porcelain: "#FBF8F2",
          espresso: "#241A16",
          umber: "#5C4134",
          taupe: "#B8A494",
          gold: "#B98B4D",
          champagne: "#E7D4B7",
          clay: "#8F5E4A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        velmora: "0.18em",
        wideLuxury: "0.28em",
      },
      boxShadow: {
        velmora: "0 24px 80px rgba(36, 26, 22, 0.10)",
        soft: "0 12px 36px rgba(36, 26, 22, 0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
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
