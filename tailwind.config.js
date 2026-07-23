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
        espresso: "#1C1410",
        charcoal: "#3D3530",
        stone: "#8C7B6E",
        gold: "#C9A96E",
        "gold-light": "#E8D5A3",
        "gold-dark": "#A07840",
        divider: "#E8E0D5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.3em",
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
        fadeIn: "fadeIn 0.6s ease forwards",
        slideInRight: "slideInRight 0.35s ease forwards",
        slideOutRight: "slideOutRight 0.35s ease forwards",
      },
    },
  },
  plugins: [],
}

