/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        charcoal: '#1C1917',
        gold: '#B8860B',
        goldLight: '#D4A843',
        stone: '#78716C',
        stoneLight: '#F5F0EB',
        cream: '#FAF7F2',
        hairline: '#E7E0D8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.12em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
}
