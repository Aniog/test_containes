/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        parchment: "#F2EDE4",
        gold: "#C9A96E",
        "gold-light": "#E8D5A3",
        "gold-dark": "#A07840",
        espresso: "#1C1A17",
        charcoal: "#2D2A26",
        "warm-gray": "#8C8680",
        "warm-gray-light": "#D4CFC8",
        blush: "#F5EDE8",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.35s ease-out forwards",
        "slide-out-right": "slide-out-right 0.35s ease-in forwards",
      },
    },
  },
  plugins: [],
}
