import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1714",
          soft: "#2A2320",
          muted: "#5C524B",
        },
        ivory: {
          DEFAULT: "#F6F1E9",
          soft: "#FBF8F2",
          deep: "#EDE5D8",
        },
        gold: {
          DEFAULT: "#B8893E",
          light: "#D4B26A",
          deep: "#9A6F2E",
          soft: "#E8D9B8",
        },
        stone: {
          DEFAULT: "#8A7F73",
          light: "#B8AFA3",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      maxWidth: {
        editorial: "1400px",
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(28, 23, 20, 0.18)",
        card: "0 8px 30px -10px rgba(28, 23, 20, 0.12)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
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
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease both",
        "slide-in": "slide-in 0.4s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
