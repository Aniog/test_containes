/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1714",
          soft: "#2B2622",
        },
        cream: "#F7F3EC",
        sand: "#EDE6DA",
        stone: "#8A8178",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#9A7541",
          light: "#D9C7A3",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        wide2: "0.18em",
      },
    },
  },
  plugins: [],
}
