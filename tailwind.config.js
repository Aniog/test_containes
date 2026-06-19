/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1814",
        "ink-soft": "#3A342D",
        bone: "#F6F1EA",
        cream: "#EFE7DC",
        line: "#D9CFC2",
        gold: "#B8893A",
        "gold-deep": "#8A6428",
        moss: "#3F4A3A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
        product: "0.18em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}