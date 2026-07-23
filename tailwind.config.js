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
        gold: "#B08A4A",
        "gold-soft": "#C9A86A",
        ivory: "#F7F3EC",
        sand: "#EFE8DC",
        stone: "#8A8074",
        line: "#E2D9C9",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        wide2: "0.18em",
      },
    },
  },
  plugins: [],
}
