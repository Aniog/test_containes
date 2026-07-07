/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'warm-dark': '#1C1C1C',
        'warm-gray': '#8B8378',
        gold: '#B8913A',
        'gold-light': '#E8D5A3',
        'warm-border': '#E2DCD3',
        'warm-charcoal': '#2C2824',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'wide': '0.1em',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
