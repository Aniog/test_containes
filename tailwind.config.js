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
        charcoal: '#1B1B1B',
        ink: '#1A1A1A',
        ivory: '#FAF7F2',
        gold: '#C9A84C',
        'gold-dark': '#A68A3E',
        'gold-light': '#E8D5A3',
        muted: '#8A8578',
        linen: '#F0EDE6',
        border: '#E5E0D8',
        amber: '#D4A843',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
