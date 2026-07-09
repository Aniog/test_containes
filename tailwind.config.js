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
        parchment: '#F2EDE4',
        espresso: '#1A1714',
        charcoal: '#2E2B27',
        stone: '#7A7570',
        gold: '#C4973A',
        'gold-light': '#D4AA5A',
        'gold-pale': '#F0E4C8',
        ivory: '#FFFDF9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
