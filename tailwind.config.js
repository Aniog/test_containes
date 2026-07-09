/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#FFFFFF',
        charcoal: '#1C1917',
        warm: '#57534E',
        gold: '#B5894E',
        'gold-dark': '#96703A',
        'gold-light': '#D4B88C',
        taupe: '#F5F0EB',
        border: '#E7E0D8',
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
