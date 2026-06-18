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
        surface: '#FFFFFF',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6360',
        gold: '#B8860B',
        'gold-dark': '#96700A',
        'gold-light': '#F5ECD7',
        hairline: '#E8E2DA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.12em',
      },
    },
  },
  plugins: [],
}
