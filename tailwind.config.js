/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-noir': '#241c1b',
        'velmora-espresso': '#4b3936',
        'velmora-parchment': '#f7f0ea',
        'velmora-sand': '#e8ddd4',
        'velmora-mist': '#f2e9e2',
        'velmora-gold': '#c8a56a',
        'velmora-rose': '#d8b9a7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 20px 50px -30px rgba(36, 28, 27, 0.35)',
        card: '0 20px 40px -30px rgba(36, 28, 27, 0.28)',
      },
      letterSpacing: {
        luxe: '0.28em',
        luxeWide: '0.38em',
      },
      backgroundImage: {
        'velmora-glow': 'radial-gradient(circle at top, rgba(216, 185, 167, 0.22), transparent 55%)',
      },
    },
  },
  plugins: [],
}
