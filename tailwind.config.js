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
          espresso: '#241712',
          ivory: '#F8F1E8',
          porcelain: '#FFF9F1',
          sand: '#EADBC8',
          taupe: '#7A695D',
          gold: '#B8894D',
          goldDeep: '#8A6538',
          line: '#E2D3C0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px rgba(36, 23, 18, 0.08)',
        luxe: '0 28px 70px rgba(36, 23, 18, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
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
