/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF7',
        pearl: '#FAF7F2',
        charcoal: '#1C1917',
        stone: '#78716C',
        gold: '#B8860B',
        goldLight: '#D4A843',
        goldDark: '#8B6914',
        border: '#E7E5E4',
        espresso: '#292524',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
