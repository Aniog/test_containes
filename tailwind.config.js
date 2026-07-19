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
        charcoal: '#1C1917',
        stone: '#78716C',
        gold: '#B8860B',
        'gold-dark': '#996F09',
        'gold-light': '#D4A843',
        border: '#E7E0D6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'section': '0.05em',
      },
    },
  },
  plugins: [],
}
