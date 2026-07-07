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
          ink: '#211816',
          espresso: '#33241f',
          ivory: '#fbf7ef',
          pearl: '#f2e8dc',
          mist: '#e8ddd0',
          champagne: '#c59d5f',
          gold: '#d9b36c',
          sable: '#7a6558',
          blush: '#ead8cc',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 65px rgba(33, 24, 22, 0.08)',
      },
    },
  },
  plugins: [],
}
