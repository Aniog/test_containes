/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ma-white':    '#F7F5F2',
        'ma-paper':    '#EDE9E3',
        'ma-stone':    '#C8C0B4',
        'ma-ash':      '#8C8680',
        'ma-concrete': '#5A5550',
        'ma-ink':      '#1C1A18',
        'ma-wood':     '#A07850',
        'ma-cedar':    '#7A5C3A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wide-xl': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
