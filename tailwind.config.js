/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        charcoal: "#1C1C1C",
        gold: "#B8956B",
        "gold-light": "#D4B896",
        "gold-dark": "#8C734F",
        stone: "#6B6B6B",
        "stone-light": "#9A9A9A",
        border: "#E8E4DF",
        "border-dark": "#D1CCC4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
