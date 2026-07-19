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
        espresso: '#2C2420',
        gold: '#B8860B',
        'gold-light': '#D4A853',
        'gold-pale': '#F5ECD7',
        taupe: '#8B7D72',
        'taupe-light': '#C4B8AD',
        'warm-white': '#FDFCFA',
        'sand': '#E8E0D5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
