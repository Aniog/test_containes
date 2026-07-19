/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        cream: '#F5F0EA',
        espresso: '#1A1714',
        taupe: '#6B6258',
        'taupe-light': '#9A9086',
        gold: '#B8860B',
        'gold-dark': '#9A7009',
        champagne: '#E6C875',
        stone: '#E2DCD3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        logo: '0.3em',
        product: '0.22em',
      },
      transitionDuration: {
        400: '400ms',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}
