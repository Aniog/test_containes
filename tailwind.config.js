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
        'navy-light': '#243044',
        gold: '#c9a84c',
        'gold-dark': '#a8893a',
        'gold-light': '#e8d08a',
        steel: '#4a5568',
        'steel-light': '#8a9ab0',
        surface: '#f8f7f4',
        'border-subtle': '#e2e0db',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
