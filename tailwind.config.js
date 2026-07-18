/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          gold: '#C9A96E',
          'gold-light': '#D4B896',
          'gold-dark': '#A67C52',
          cream: '#F5F0EB',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2D2D2D',
          nude: '#E8DDD3',
          'nude-light': '#F0E8E0',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      }
    },
  },
  plugins: [],
}
