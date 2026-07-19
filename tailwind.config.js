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
        espresso: "#2A2520",
        cream: "#F7F2EA",
        sand: "#EDE4D6",
        stone: "#8A7F73",
        gold: "#B08D57",
        "gold-deep": "#8A6A3B",
        champagne: "#D9C3A1",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
