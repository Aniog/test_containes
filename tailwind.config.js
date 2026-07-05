/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        velvet: '#241b1f',
        'velvet-soft': '#34282d',
        ivory: '#f6f0e7',
        pearl: '#fdfaf5',
        champagne: '#c8a979',
        'champagne-deep': '#aa8857',
        truffle: '#69575f',
        ink: '#1b1718',
        line: 'rgba(36, 27, 31, 0.12)',
        'line-inverse': 'rgba(246, 240, 231, 0.18)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      boxShadow: {
        luxe: '0 24px 70px rgba(36, 27, 31, 0.12)',
        card: '0 18px 45px rgba(36, 27, 31, 0.08)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, rgba(36,27,31,0.18) 0%, rgba(36,27,31,0.55) 52%, rgba(36,27,31,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
