/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        parchment: '#F3EEE6',
        charcoal: '#1C1C1C',
        warmgray: '#6B6560',
        lightgray: '#9E9994',
        espresso: '#2A2420',
        gold: '#C9A962',
        golddark: '#A88942',
        divider: '#E3DDD4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        superwide: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
