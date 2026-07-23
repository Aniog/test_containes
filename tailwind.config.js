/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        parchment: '#F0EAE1',
        champagne: '#E8DCC8',
        gold: '#C8A96E',
        'gold-dark': '#B08D4F',
        'gold-light': '#D9C49A',
        charcoal: '#1A1A1A',
        'charcoal-soft': '#2D2D2D',
        'charcoal-muted': '#4A4A4A',
        warmgray: '#8C8C8C',
        'warmgray-light': '#B5B5B5',
        'warmgray-muted': '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}
