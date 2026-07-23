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
        'gold-light': '#D4A853',
        muted: '#F0EBE3',
        'muted-fg': '#6B6358',
        border: '#E8E2D9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
