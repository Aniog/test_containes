/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        parchment: '#F3EFE8',
        sand: '#E8E2D8',
        warmgray: '#A89E92',
        umber: '#6B5E53',
        espresso: '#3D2E22',
        charcoal: '#1A1410',
        gold: '#C9A96E',
        golddark: '#B08D55',
        goldlight: '#D4BC8A',
        rose: '#B86B6B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        superwide: '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
