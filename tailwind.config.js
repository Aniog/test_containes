/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F6F1EA',
          surface: '#FBF7F1',
          sand: '#E9DCCF',
          espresso: '#2D211C',
          mink: '#7A675A',
          bronze: '#B78857',
          line: '#D8C7B8',
          umber: '#201714',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 64px rgba(45, 33, 28, 0.10)',
      },
    },
  },
  plugins: [],
}
