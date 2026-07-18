/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        ink: '#211C18',
        truffle: '#3A2E26',
        ivory: '#F7F2EC',
        cream: '#FBF8F3',
        sand: '#E8DFD3',
        taupe: '#8A7A6B',
        gold: '#B08A4F',
        'gold-deep': '#947039',
        champagne: '#EFE3CE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
        product: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(33,28,24,0.25)',
        card: '0 18px 50px -28px rgba(33,28,24,0.35)',
      },
    },
  },
  plugins: [],
}
