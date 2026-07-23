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
          ink: '#17110d',
          espresso: '#2a1c15',
          ivory: '#fbf7ef',
          parchment: '#f2eadc',
          champagne: '#e8dbc6',
          gold: '#c6a15b',
          umber: '#7c5b3c',
          blush: '#d9bba7',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'velmora-soft': '0 24px 80px rgba(23, 17, 13, 0.12)',
        'velmora-card': '0 18px 50px rgba(42, 28, 21, 0.10)',
      },
      letterSpacing: {
        velmora: '0.22em',
        'velmora-wide': '0.28em',
      },
      aspectRatio: {
        reel: '9 / 16',
        editorial: '4 / 5',
        portrait: '3 / 4',
        landscape: '16 / 9',
      },
    },
  },
  plugins: [],
}
