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
        "ivory-dark": "#F2EDE4",
        espresso: "#1A1208",
        "espresso-light": "#2E2010",
        gold: "#C9A96E",
        "gold-light": "#E8D5A3",
        "gold-dark": "#A07840",
        "warm-gray": "#8A7E72",
        "warm-gray-light": "#D4CCC2",
        cream: "#FFFDF9",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        "extra-wide": "0.15em",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
}
