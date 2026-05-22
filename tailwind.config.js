/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1a4731",
        leaf:   "#2d6a4f",
        sage:   "#52b788",
        sky:    "#0077b6",
        mist:   "#e8f4f8",
        earth:  "#6b4226",
        sand:   "#f8f5f0",
        ink:    "#1a1a2e",
        stone:  "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
