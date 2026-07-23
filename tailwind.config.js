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
          ivory: '#fbf7ef',
          parchment: '#f2eadc',
          sand: '#ddd0bd',
          espresso: '#211815',
          cacao: '#3a2923',
          taupe: '#716159',
          gold: '#b58a45',
          softGold: '#d8bb82',
          line: '#d8cbb8',
          blush: '#efe3d8',
          pearl: '#fffdf8',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(33, 24, 21, 0.10)',
        glow: '0 18px 70px rgba(181, 138, 69, 0.18)',
      },
      letterSpacing: {
        luxe: '0.22em',
      },
    },
  },
  plugins: [],
}
