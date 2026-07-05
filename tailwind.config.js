/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#17110D',
          porcelain: '#F7F1E8',
          champagne: '#E9D8BE',
          gold: '#B9853B',
          bronze: '#5D3A1E',
          mist: '#FBF8F2',
          taupe: '#8D7463',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 17, 13, 0.12)',
      },
    },
  },
  plugins: [],
}
