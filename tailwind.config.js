/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14110F',
        espresso: '#1E1A17',
        cream: '#F6F1EA',
        sand: '#E8DFD3',
        gold: '#C9A24B',
        'gold-soft': '#D8B968',
        champagne: '#E4D2A8',
        stone: '#6B6258',
        'stone-light': '#A89F92',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 17, 15, 0.18)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
