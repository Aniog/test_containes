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
          gold: '#B8956A',
          'gold-light': '#D4B896',
          'gold-dark': '#8B6914',
          charcoal: '#2C2C2C',
          espresso: '#1A1A1A',
          muted: '#6B6560',
          'warm-gray': '#9C9590',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'wide-xl': '0.15em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
