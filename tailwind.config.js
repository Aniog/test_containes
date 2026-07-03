/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        paper: "#fbfaf9",
        sand: "#f5f0eb",
        champagne: "#c8a473",
        "champagne-hover": "#b08a5a",
        mocha: "#3e332a",
        taupe: "#8c8178",
        linen: "#ede8e2",
        "rose-gold": "#d4b8a3",
        divider: "#e7e2dc",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.22em",
        wide: "0.14em",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
