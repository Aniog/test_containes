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
        gold: '#B8860B',
        'gold-light': '#D4A843',
        muted: '#6B6B6B',
        surface: '#F0EBE3',
        border: '#E5DFD6',
        dark: '#0D0D0D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
