/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F4EFE6",
        ivory: "#FFFCF6",
        linen: "#E9DDCD",
        mist: "#D8CBB8",
        stone: "#6F6256",
        cocoa: "#2B201B",
        espresso: "#17100D",
        champagne: "#C8A35D",
        antique: "#96733B",
        blush: "#D8BDAA",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        product: "0.18em",
        luxe: "0.28em",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(43, 32, 27, 0.10)",
        glow: "0 24px 80px rgba(200, 163, 93, 0.20)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
