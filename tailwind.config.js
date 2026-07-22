/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          warm: '#EDE6DA',
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-dark': '#8B6914',
          charcoal: '#1A1A1A',
          graphite: '#2D2D2D',
          muted: '#6B6B6B',
          'muted-light': '#9A9A9A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
