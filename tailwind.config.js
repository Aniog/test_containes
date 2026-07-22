/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#1f1817',
          cacao: '#352927',
          bronze: '#a67b50',
          champagne: '#d9bf9d',
          parchment: '#f7f1eb',
          sand: '#ede2d4',
          mist: '#aa9783',
          rose: '#6f5350',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
        label: '0.18em',
      },
      aspectRatio: {
        portrait: '9 / 16',
        editorial: '4 / 5',
        gallery: '3 / 4',
        landscape: '4 / 3',
      },
      boxShadow: {
        card: '0 20px 45px -24px rgba(31, 24, 23, 0.35)',
        soft: '0 16px 40px -28px rgba(31, 24, 23, 0.3)',
      },
    },
  },
  plugins: [],
}
