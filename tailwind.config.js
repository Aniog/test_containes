/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        "ink-soft": "#2A2520",
        cream: "#F7F2EA",
        "cream-soft": "#FBF8F2",
        sand: "#E8DECF",
        gold: "#B08D57",
        "gold-deep": "#8A6B3F",
        stone: "#6B6258",
        "stone-soft": "#9A9088",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
