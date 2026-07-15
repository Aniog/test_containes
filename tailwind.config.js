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
          ink: '#2E2520',
          cream: '#F7F0E7',
          porcelain: '#FFFBF5',
          linen: '#E7D7C6',
          champagne: '#C7A56B',
          antique: '#8A633C',
          blush: '#D8B7A3',
          sage: '#747063',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(31, 23, 19, 0.10)',
        glow: '0 18px 45px rgba(199, 165, 107, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
