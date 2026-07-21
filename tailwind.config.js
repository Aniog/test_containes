/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4ECDF',
          2: '#EBE0CE',
        },
        bone: '#FBF6EC',
        espresso: {
          DEFAULT: '#1F1A14',
          2: '#2A2419',
        },
        ink: '#2A2419',
        muted: '#6B5E4D',
        gold: {
          DEFAULT: '#B08A4A',
          2: '#9A7438',
          soft: '#D9B97F',
        },
        line: '#D9CFB9',
        'line-dark': '#3A322A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'widest-2': '0.22em',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
