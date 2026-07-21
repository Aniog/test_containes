/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        ink: '#211B16',
        ivory: '#F7F2EA',
        cream: '#FBF8F2',
        sand: '#E7DDCC',
        taupe: '#8A7C6B',
        gold: {
          DEFAULT: '#B08A4F',
          deep: '#94703B',
          light: '#C9A86A',
        },
        champagne: '#EFE3CE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
