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
          espresso: '#241B16',
          umber: '#3A2B22',
          parchment: '#F5EFE6',
          ivory: '#FFFDF8',
          gold: '#C9A46A',
          goldDark: '#B28C52',
          stone: '#D9CBB8',
          mist: '#E9E0D2',
          taupe: '#7D6E61',
          blush: '#EAD6C9',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(36, 27, 22, 0.10)',
        editorial: '0 26px 80px rgba(36, 27, 22, 0.16)',
      },
    },
  },
  plugins: [],
}
