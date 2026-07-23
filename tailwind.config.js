/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        'cream-dark': '#F5F0EB',
        charcoal: '#1C1917',
        'charcoal-light': '#44403C',
        gold: '#9E7C4C',
        'gold-dark': '#7D6139',
        'gold-light': '#C9A96E',
        border: '#E8E0D8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
      },
    },
  },
  plugins: [],
}
