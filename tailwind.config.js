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
          ivory: '#F8F3EA',
          pearl: '#FFFDF8',
          espresso: '#241A16',
          cocoa: '#5E4A3F',
          taupe: '#CDBFAE',
          champagne: '#D6AA63',
          gold: '#B98232',
          blush: '#E9D9CC',
          sage: '#586052',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(36, 26, 22, 0.10)',
        glow: '0 18px 48px rgba(214, 170, 99, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'soft-pulse': 'softPulse 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
