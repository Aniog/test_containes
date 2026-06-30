/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          espresso: '#17110E',
          ivory: '#F8F1E8',
          pearl: '#FFF9F1',
          gold: '#C8A15A',
          burnished: '#8D6837',
          taupe: '#BBAA96',
          clay: '#A96F5E',
        },
      },
      boxShadow: {
        editorial: '0 28px 70px rgba(23, 17, 14, 0.12)',
        soft: '0 16px 40px rgba(23, 17, 14, 0.08)',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
    },
  },
  plugins: [],
}
