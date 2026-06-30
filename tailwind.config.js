/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        charcoal: "#2a2520",
        "dark-charcoal": "#1f1b17",
        "warm-gold": "#c9a96e",
        "warm-gold-light": "#dcc288",
        "dusty-rose": "#c9a8a4",
        ivory: "#f5f0ea",
        "dark-ivory": "#e8e0d4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.16em",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
}
