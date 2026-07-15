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
          warm: '#E8DFD3',
          gold: '#B8956A',
          'gold-light': '#D4B896',
          'gold-dark': '#8B6914',
          charcoal: '#1A1A1A',
          'dark': '#2C2C2C',
          'muted': '#6B6B6B',
          'light-muted': '#9A9A9A',
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
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
