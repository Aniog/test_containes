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
        ink: '#2A2520',
        gold: '#B08A4F',
        'gold-soft': '#C9A86A',
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#A89B89',
        hairline: '#E2D9CB',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(28,23,20,0.25)',
        card: '0 6px 24px -12px rgba(28,23,20,0.18)',
      },
    },
  },
  plugins: [],
}
