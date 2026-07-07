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
          charcoal: '#1c1917',
          espresso: '#292524',
          ivory: '#faf8f5',
          linen: '#f3efe8',
          cream: '#efe9df',
          gold: '#c8a165',
          'gold-light': '#d4b483',
          'gold-dark': '#a8834a',
          'text-dark': '#1c1917',
          'text-light': '#f5f2ed',
          'text-muted': '#78716c',
          border: '#e7e5e4',
          'border-dark': '#44403c',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.12em',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
}
