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
          DEFAULT: "#1C1714",
          soft: "#2A2320",
        },
        ivory: "#F7F3EC",
        cream: "#EFE7DA",
        sand: "#E2D6C2",
        gold: {
          DEFAULT: "#B08A4A",
          deep: "#8C6A33",
        },
        champagne: "#D9BE86",
        muted: {
          DEFAULT: "#7A6F62",
          dark: "#9A8E80",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['Inter', "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
}
