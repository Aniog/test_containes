/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E9",
        ivory: "#FBF8F2",
        stone: "#EDE6DA",
        espresso: "#1F1A16",
        ink: "#2A2420",
        muted: "#8A7F73",
        gold: "#B08D57",
        "gold-soft": "#C9AE82",
        line: "#E2D9CC",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        wide2: "0.18em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
