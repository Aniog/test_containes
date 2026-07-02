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
        'gold-dark': '#8B6508',
        taupe: '#8C7B6B',
        ivory: '#F5F0E8',
        sand: '#E8E0D4',
        espresso: '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
