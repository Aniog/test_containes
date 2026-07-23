/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1F1A15",
        ink: "#2B2520",
        gold: {
          DEFAULT: "#B08A4F",
          soft: "#C9A86A",
        },
        ivory: "#F7F3EC",
        sand: "#EDE6DA",
        stone: "#8A8074",
        line: "#E2D9CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
}
