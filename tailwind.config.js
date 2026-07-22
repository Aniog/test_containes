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
          bg: '#0F0F0F',
          surface: '#1A1A1A',
          'surface-elevated': '#242424',
          gold: '#C9A96E',
          'gold-hover': '#D4B87A',
          'text-primary': '#F5F0EB',
          'text-secondary': '#A0988E',
          'text-muted': '#6B6560',
          border: '#2A2A2A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'wide-xl': '0.15em',
        'wide-product': '0.1em',
      },
    },
  },
  plugins: [],
}
