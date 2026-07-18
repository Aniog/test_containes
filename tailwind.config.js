/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EF",
        "cream-100": "#F3ECE0",
        espresso: "#1C1714",
        "espresso-700": "#2A2420",
        "espresso-500": "#4A413A",
        muted: "#8A7F73",
        gold: "#B08D57",
        "gold-600": "#9A7746",
        "gold-100": "#E8DCC6",
        line: "#E2D9CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(28,23,20,0.25)",
        drawer: "-20px 0 60px -20px rgba(28,23,20,0.35)",
      },
    },
  },
  plugins: [],
}

