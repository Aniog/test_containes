/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#171413',
        espresso: '#241D1A',
        parchment: '#F5EFE7',
        ivory: '#FCF8F3',
        taupe: '#8C7C70',
        gilded: '#BC9562',
        rose: '#D7B89A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 20, 19, 0.10)',
        card: '0 12px 30px rgba(23, 20, 19, 0.08)',
      },
      letterSpacing: {
        velmora: '0.28em',
        luxe: '0.18em',
      },
      transitionTimingFunction: {
        luxurious: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
