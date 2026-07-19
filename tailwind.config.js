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
        ink: "#2A2420",
        ivory: "#F7F2EC",
        cream: "#FBF8F3",
        sand: "#E8DECF",
        taupe: "#8A7E6E",
        gold: "#B08D57",
        "gold-deep": "#8C6A3E",
        champagne: "#D9C3A0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
