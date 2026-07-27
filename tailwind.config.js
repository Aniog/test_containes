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
        parchment: "#F0EAE0",
        stone: "#E8E0D4",
        muted: "#C4B8A8",
        taupe: "#7A6A58",
        espresso: "#2C2420",
        obsidian: "#1A1614",
        gold: "#B8965A",
        "gold-light": "#D4AF7A",
        "gold-pale": "#F0E6D3",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
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
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
        slideInRight: "slideInRight 0.35s ease forwards",
        slideOutRight: "slideOutRight 0.35s ease forwards",
      },
    },
  },
  plugins: [],
}
