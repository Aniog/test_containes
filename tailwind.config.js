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
        "ivory-dark": "#F2EDE5",
        espresso: "#1A1208",
        "espresso-light": "#3D2E1E",
        gold: "#C9A96E",
        "gold-light": "#E2C98A",
        "gold-dark": "#A8854A",
        stone: "#8C7B6B",
        "stone-light": "#C4B5A5",
        charcoal: "#2C2420",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.3em",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-fast": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-fast": "fade-in-fast 0.3s ease-out forwards",
        "slide-in-right": "slide-in-right 0.35s ease-out forwards",
      },
    },
  },
  plugins: [],
}
