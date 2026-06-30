/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1714",
        cream: "#F7F2EA",
        sand: "#EFE7DA",
        champagne: "#B08D57",
        "champagne-deep": "#8A6A3B",
        stone: "#6B6258",
        line: "#E2D8C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
}
