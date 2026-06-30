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
        sand: "#EDE6DA",
        stone: "#8A8175",
        gold: "#B08D57",
        "gold-deep": "#94703F",
        champagne: "#E8D9BE",
        line: "#D9D0C2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.18em",
      },
      maxWidth: {
        editorial: "88rem",
      },
      boxShadow: {
        editorial: "0 18px 40px -20px rgba(26,23,20,0.35)",
      },
    },
  },
  plugins: [],
}
