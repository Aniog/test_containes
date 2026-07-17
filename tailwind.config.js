/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F1',
        'warm-white': '#FDFBF9',
        charcoal: '#2C2C2C',
        'dark-charcoal': '#1A1A1A',
        stone: '#8B8580',
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A8894D',
        error: '#C73E3E',
        success: '#2E7D5E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
