/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EC",
        cream: "#FBF8F2",
        espresso: "#1C1714",
        ink: "#2A2420",
        stone: "#6B6258",
        sand: "#E8E0D3",
        gold: "#B08D57",
        "gold-soft": "#C9A96A",
        "gold-deep": "#8A6D3F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}
