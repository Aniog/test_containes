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
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        velmora: {
          cream: "#F7F3EE",
          sand: "#EBE4DB",
          tan: "#D6C8B8",
          taupe: "#A89B8C",
          mocha: "#6B5E51",
          espresso: "#2C2520",
          gold: "#C5A065",
          goldlight: "#DDC090",
          charcoal: "#1A1612",
        },
      },
      letterSpacing: {
        widest: "0.22em",
        label: "0.18em",
      },
      transitionDuration: {
        400: "400ms",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
