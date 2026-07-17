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
        ink: '#221E1A',
        ivory: '#F7F3EC',
        cream: '#FBF8F2',
        sand: '#E4DBCD',
        taupe: '#8A7F70',
        gold: {
          DEFAULT: '#B08A4B',
          deep: '#94703A',
          light: '#C9A86A',
        },
        champagne: '#EFE6D2',
        warmwhite: '#EDE6DA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
