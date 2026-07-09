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
          ivory: '#F7F1E8',
          porcelain: '#FFFBF5',
          espresso: '#241711',
          cacao: '#4A3329',
          bronze: '#B58A54',
          champagne: '#E7D2B2',
          sage: '#77715F',
          rose: '#C9A39A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 22px 70px rgba(36, 23, 17, 0.10)',
        jewel: '0 16px 50px rgba(181, 138, 84, 0.18)',
      },
    },
  },
  plugins: [],
}
