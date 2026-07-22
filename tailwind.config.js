/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1714",
        ink: "#2A2520",
        ivory: "#F7F3EC",
        cream: "#EFE8DC",
        sand: "#B8AFA1",
        gold: "#B08A4F",
        "gold-deep": "#947039",
        champagne: "#E7D9BE",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(28,23,20,0.25)",
      },
    },
  },
  plugins: [],
}
