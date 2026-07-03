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
        cream: "#F7F3EC",
        sand: "#EFE7DA",
        gold: "#B08D57",
        "gold-deep": "#94703F",
        champagne: "#C9A86A",
        stone: "#7A6F62",
        hairline: "#E2D8C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      maxWidth: {
        editorial: "1400px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
