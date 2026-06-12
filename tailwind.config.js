/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        graphite: "#1F242C",
        steel: "#5B6573",
        mist: "#E6E8EC",
        bone: "#F4F2EE",
        paper: "#FFFFFF",
        gold: "#B89766",
        "gold-deep": "#8A6E48",
        signal: "#B23A2A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}
