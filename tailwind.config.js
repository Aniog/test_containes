/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F8F5F1',
          ivory: '#F5F1E9',
          'warm-gray': '#EDE8E0',
          taupe: '#2C2825',
          charcoal: '#1C1C1C',
          gold: '#B89778',
          'gold-dark': '#8B6F4E',
          'gold-light': '#D4B896',
          text: '#1C1C1C',
          'text-muted': '#5C5752',
          border: '#D4CFC6',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wide-product': '0.15em',
      }
    },
  },
  plugins: [],
}
