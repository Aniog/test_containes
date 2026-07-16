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
        parchment: '#F2EDE4',
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A07840',
        espresso: '#1C1917',
        charcoal: '#2C2420',
        taupe: '#8B7355',
        linen: '#E8E0D0',
        blush: '#F7F0E8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
