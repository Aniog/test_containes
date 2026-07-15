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
          espresso: '#221A16',
          cocoa: '#372820',
          parchment: '#F6F0E7',
          ivory: '#FFFDF8',
          champagne: '#D8B878',
          gold: '#A57932',
          taupe: '#8D7766',
          blush: '#CFAE9E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.16em',
        luxe: '0.18em',
        ritual: '0.2em',
        luxury: '0.22em',
        refined: '0.24em',
        couture: '0.26em',
        heirloom: '0.28em',
        atelier: '0.32em',
        manifesto: '0.36em',
        logo: '0.22em',
      },
      boxShadow: {
        nav: '0 8px 35px rgba(34, 26, 22, 0.08)',
        luxury: '0 22px 50px rgba(34, 26, 22, 0.12)',
        reel: '0 18px 45px rgba(0, 0, 0, 0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
