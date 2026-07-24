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
          porcelain: '#F7F1E8',
          champagne: '#EFE2CF',
          sand: '#D8C4A8',
          espresso: '#211713',
          cocoa: '#4B3329',
          gold: '#B68A48',
          softgold: '#D7B978',
          ivory: '#FFFDF8',
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
