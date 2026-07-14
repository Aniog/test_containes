/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1EA",
        ivory: "#FAF6F0",
        sand: "#EFE6D8",
        line: "#E3D9CC",
        espresso: "#1F1A17",
        cocoa: "#2B2520",
        smoke: "#3D352E",
        ash: "#6B6259",
        gold: "#B8893A",
        "gold-deep": "#8C6428",
        "gold-soft": "#E8D7B5",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.14em",
        widest2: "0.22em",
        luxe: "0.18em",
      },
      maxWidth: {
        editorial: "1280px",
        shop: "1100px",
        product: "1180px",
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(31, 26, 23, 0.08)",
        card: "0 1px 3px rgba(31, 26, 23, 0.06), 0 8px 24px -12px rgba(31, 26, 23, 0.12)",
        drawer: "-12px 0 40px -8px rgba(31, 26, 23, 0.18)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "slide-up": "slide-up 360ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        "fade-in": "fade-in 600ms ease-out both",
        "scale-in": "scale-in 400ms ease-out both",
      },
    },
  },
  plugins: [],
}
