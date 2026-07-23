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
          ivory: '#F8F3EA',
          parchment: '#EFE5D6',
          linen: '#FBF8F2',
          espresso: '#2A1D18',
          charcoal: '#3B302C',
          taupe: '#8C7665',
          gold: '#B68A4A',
          goldDeep: '#8A642E',
          rose: '#D8B8A8',
          mist: '#E7DED2',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(42, 29, 24, 0.10)',
        editorial: '0 28px 70px rgba(42, 29, 24, 0.16)',
      },
    },
  },
  plugins: [],
}
