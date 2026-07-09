/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1410",
        espresso: "#2A211B",
        ivory: "#F7F2EA",
        cream: "#FBF8F2",
        sand: "#E8DECF",
        taupe: "#8C7B68",
        gold: "#B08D57",
        "gold-deep": "#9A7544",
        champagne: "#D9C3A0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
