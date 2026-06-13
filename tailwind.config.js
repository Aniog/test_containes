/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2332',
        gold: '#c8963e',
        cream: '#f8f7f4',
        charcoal: '#2d2d2d',
        steel: '#5b7b9a',
        'gold-light': '#d4af6f',
        'gold-dark': '#a67c2e',
        'navy-light': '#243447',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
