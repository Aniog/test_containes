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
          ink: '#17130F',
          espresso: '#2B211A',
          ivory: '#F8F2E8',
          cream: '#FFF9F0',
          sand: '#E9D8C0',
          taupe: '#8D7764',
          gold: '#B98A45',
          champagne: '#D9B978',
          rose: '#B88474',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.22em',
        nav: '0.16em',
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(23, 19, 15, 0.14)',
        drawer: '-24px 0 70px rgba(23, 19, 15, 0.24)',
      },
      aspectRatio: {
        product: '4 / 5',
        editorial: '5 / 6',
        reel: '9 / 16',
      },
    },
  },
  plugins: [],
}
