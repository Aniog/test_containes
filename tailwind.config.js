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
          ivory: '#F7F1E8',
          porcelain: '#FFFCF7',
          espresso: '#201812',
          walnut: '#4E3728',
          truffle: '#7A6758',
          gold: '#B8863B',
          champagne: '#E7CFA7',
          onyx: '#0F0B08',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(32, 24, 18, 0.10)',
        editorial: '0 16px 48px rgba(32, 24, 18, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'soft-in': 'softIn 500ms ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
