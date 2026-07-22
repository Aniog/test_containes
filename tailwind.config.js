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
        cream: "#EFE8DC",
        sand: "#E2D6C2",
        espresso: "#2A211A",
        cocoa: "#4A3F35",
        taupe: "#8A7C6B",
        gold: "#B08A4F",
        "gold-deep": "#8C6A36",
        champagne: "#D9BE86",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      boxShadow: {
        editorial: '0 10px 40px -15px rgba(42,33,26,0.25)',
        soft: '0 6px 24px -12px rgba(42,33,26,0.2)',
      },
    },
  },
  plugins: [],
}
