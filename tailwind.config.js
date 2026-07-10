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
        gold: '#C9A96E',
        'gold-hover': '#B8944F',
        'gold-light': '#E8D5B0',
        base: '#1C1917',
        'surface-warm': '#F5F0EB',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'wide-product': '0.15em',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
