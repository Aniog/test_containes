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
        espresso: "#2A211B",
        "espresso-soft": "#4A3F37",
        gold: "#B08A4F",
        "gold-deep": "#8C6A36",
        stone: "#9A8E7E",
        hairline: "#E2D9CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        editorial: '0 10px 40px -20px rgba(42,33,27,0.25)',
      },
    },
  },
  plugins: [],
}
