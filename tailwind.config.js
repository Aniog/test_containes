/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F4',
        espresso: '#1C1917',
        taupe: '#7A7169',
        gold: {
          DEFAULT: '#C7A55B',
          hover: '#B8944A',
          light: '#DCC88A',
          pale: '#F5ECD7',
        },
        stone: {
          warm: '#E8E2D9',
          lighter: '#F2EDE6',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        widerest: '0.35em',
      },
      screens: {
        'xs': '480px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
