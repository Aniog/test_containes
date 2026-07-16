/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#1A1410',
          ivory: '#F5F0EB',
          gold: '#C9A96E',
          'gold-dark': '#B8944F',
          'gold-soft': '#E8D5B7',
          'gold-deep': '#A67C3E',
          muted: '#8B7D72',
          border: '#E5DDD5',
          'border-light': '#D9CFC4',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-xl': '0.15em',
        'wide-2xl': '0.2em',
      },
    },
  },
  plugins: [],
}
