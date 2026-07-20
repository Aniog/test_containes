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
        ivory: '#F5F0E8',
        charcoal: '#1A1A1A',
        muted: '#6B6358',
        gold: '#B8860B',
        'gold-dark': '#9A7209',
        'border-warm': '#E8E0D4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
