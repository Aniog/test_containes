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
          espresso: '#1F1713',
          charcoal: '#302620',
          ivory: '#F7F1E8',
          champagne: '#E8D8BE',
          gold: '#B8874B',
          taupe: '#8B7A6A',
          clay: '#C9A18C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(31, 23, 19, 0.10)',
      },
      animation: {
        'rise-in': 'rise-in 900ms ease-out both',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
