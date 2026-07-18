/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        parchment: "#F2EDE4",
        champagne: "#E8D5B0",
        gold: "#C9A96E",
        "gold-dark": "#A8854A",
        "gold-light": "#EDD9A3",
        ink: "#1C1410",
        taupe: "#6B5E52",
        "stone-warm": "#9E9189",
        hairline: "#E2D9CC",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.35s ease-out forwards",
        slideInLeft: "slideInLeft 0.35s ease-out forwards",
      },
    },
  },
  plugins: [],
}
