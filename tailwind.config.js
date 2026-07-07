/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1A17",
        espresso: "#2A2622",
        cream: "#F7F3EC",
        sand: "#EDE6DA",
        stone: "#B8AE9E",
        gold: "#B08D57",
        "gold-deep": "#8A6A3B",
        champagne: "#D9C7A3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}
