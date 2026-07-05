/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#1F1A18',
          cocoa: '#3B322D',
          parchment: '#F6F0E8',
          linen: '#E7DDD1',
          champagne: '#D6B48A',
          bronze: '#8B6A4B',
          mist: '#8F7B69',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.24em',
        nav: '0.18em',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(31, 26, 24, 0.08)',
        card: '0 18px 30px rgba(31, 26, 24, 0.06)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
