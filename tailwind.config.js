/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#211915',
          umber: '#35251e',
          ivory: '#f8f2e9',
          pearl: '#fffaf2',
          sand: '#e7d8c4',
          champagne: '#c49a5a',
          gold: '#9f7333',
          clay: '#9b6f60',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
