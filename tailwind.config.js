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
          ink: '#17120F',
          espresso: '#2B211C',
          porcelain: '#F7F1EA',
          sand: '#E8D9C8',
          champagne: '#C9A46A',
          pearl: '#FFFDF9',
          clay: '#8A604B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        logo: '0.18em',
        product: '0.22em',
        nav: '0.16em',
      },
      boxShadow: {
        velmora: '0 24px 70px rgba(43, 33, 28, 0.12)',
        jewel: '0 18px 45px rgba(23, 18, 15, 0.18)',
      },
      transitionTimingFunction: {
        velmora: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
