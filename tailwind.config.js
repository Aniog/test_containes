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
          cream: '#FAF7F2',
          sand: '#F3EDE4',
          charcoal: '#1A1A1A',
          stone: '#6B6358',
          gold: '#B8860B',
          'gold-dark': '#8B6508',
          'gold-light': '#D4A843',
          border: '#E8E0D6',
          espresso: '#2C2420',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
      }
    },
  },
  plugins: [],
}
