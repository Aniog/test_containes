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
        parchment: '#F3EDE4',
        sand: '#E8DFD2',
        taupe: '#C4B8A8',
        warmgray: '#8C8075',
        charcoal: '#2C2420',
        espresso: '#1A1512',
        gold: '#C9A86C',
        goldlight: '#DCC094',
        golddark: '#A6834B',
        rose: '#C9A6A1',
        roselight: '#D9BCB8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
