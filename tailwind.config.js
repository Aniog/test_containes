/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F0E6",
        paper: "#FBF7F0",
        stone: "#E8DFD2",
        ink: "#1B1612",
        "ink-soft": "#3A312A",
        muted: "#7A6F62",
        gold: "#B08A4A",
        "gold-deep": "#8A6A33",
        "gold-soft": "#D9C29A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "0.01em",
        product: "0.18em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        "7xl": "1280px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
