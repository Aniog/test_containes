/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6F0",
        sand: "#F2EBDD",
        card: "#FFFFFF",
        espresso: {
          DEFAULT: "#1F1A14",
          soft: "#2A2419",
        },
        taupe: {
          DEFAULT: "#6B5D4F",
          light: "#9B8E7E",
        },
        hairline: "#E8DFD0",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#8E6F3D",
        },
        blush: "#E9D9C9",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,26,20,0.04), 0 8px 24px rgba(31,26,20,0.04)",
        cardHover: "0 1px 2px rgba(31,26,20,0.06), 0 18px 40px rgba(31,26,20,0.08)",
        drawer: "-24px 0 60px rgba(31,26,20,0.12)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        slideInRight: "slideInRight 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
