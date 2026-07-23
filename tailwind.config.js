/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#171311',
        ink: '#2F2926',
        parchment: '#F5F0E8',
        mist: '#FBF8F4',
        sand: '#E8DDD0',
        taupe: '#9E8B78',
        gold: '#B68A52',
        bronze: '#7C5A3C',
        line: '#DCCFC0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.28em',
        eyebrow: '0.35em',
        button: '0.18em',
        brand: '0.3em',
      },
      boxShadow: {
        card: '0 18px 40px rgba(23, 19, 17, 0.08)',
        soft: '0 12px 24px rgba(23, 19, 17, 0.12)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
