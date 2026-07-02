/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        velmora: {
          cream: "#F7F3ED",
          sand: "#EDE6DC",
          stone: "#D6CFC5",
          taupe: "#A89F91",
          mocha: "#7D7266",
          espresso: "#3E3832",
          charcoal: "#1E1C1A",
          gold: "#C9A962",
          "gold-light": "#E2CFA3",
          "gold-dark": "#9A7E3F",
          blush: "#EBD6D0",
        },
      },
      letterSpacing: {
        widest: "0.22em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
