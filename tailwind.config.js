/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#241d1a',
        truffle: '#40312b',
        ivory: '#f7f2eb',
        pearl: '#efe6db',
        champagne: '#d8b36b',
        rose: '#c79a81',
        smoke: '#8a7a72',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -28px rgba(36, 29, 26, 0.35)',
        card: '0 20px 50px -35px rgba(36, 29, 26, 0.3)',
      },
      letterSpacing: {
        luxe: '0.26em',
      },
      borderRadius: {
        luxe: '1.75rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'velmora-glow': 'radial-gradient(circle at top, rgba(216, 179, 107, 0.12), transparent 48%)',
      },
    },
  },
  plugins: [],
}
