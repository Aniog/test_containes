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
          sand: '#E8DFD3',
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-dark': '#8B6914',
          charcoal: '#1A1A1A',
          'dark': '#0D0D0D',
          'warm-gray': '#6B5E53',
          'muted': '#9C8E82',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'wide-xl': '0.15em',
      },
    },
  },
  plugins: [],
}
