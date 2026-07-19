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
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6460',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        'gold-muted': '#C9A96E',
        ivory: '#F5F0E8',
        'deep-brown': '#2C1810',
        blush: '#F2E8E0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
