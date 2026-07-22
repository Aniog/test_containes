/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        "cream-white": "#FFFDF9",
        charcoal: "#1C1917",
        obsidian: "#0F0D0B",
        gold: "#B8965A",
        "gold-light": "#D4AF7A",
        "gold-dark": "#8C6E3A",
        taupe: "#E8DDD0",
        "warm-gray": "#8C7B6E",
        "warm-gray-lt": "#C4B5A8",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        manrope: ["Manrope", "Inter", "sans-serif"],
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

