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
        espresso: "#1F1A15",
        "espresso-soft": "#3A322A",
        gold: "#B08A4F",
        "gold-deep": "#947039",
        stone: "#6B6258",
        hairline: "#D9CFC0",
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
