/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#F8F3EA',
          porcelain: '#FFFDF8',
          espresso: '#241A16',
          taupe: '#7B6A5F',
          mist: '#E7DED2',
          champagne: '#B78A45',
          blush: '#EAD8CA',
          olive: '#4C493C',
          smoke: '#302721',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(36, 26, 22, 0.10)',
        soft: '0 14px 40px rgba(36, 26, 22, 0.08)',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'soft-pulse': 'softPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
