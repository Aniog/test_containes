/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        charcoal: '#1C1917',
        gold: '#C9A96E',
        'gold-dark': '#A67C52',
        taupe: '#8B7D6B',
        'warm-gray': '#E8E2DA',
        stone: '#F5F0EA',
        deep: '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
