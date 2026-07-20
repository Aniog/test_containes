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
          ink: '#241B17',
          espresso: '#18100D',
          ivory: '#F7F1E8',
          porcelain: '#FFFBF5',
          sand: '#E7D8C4',
          taupe: '#7D6A5D',
          gold: '#B88A44',
          champagne: '#D8B875',
          blush: '#EAD8CF',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.18em',
        logo: '0.28em',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(36, 27, 23, 0.08)',
        luxury: '0 28px 80px rgba(36, 27, 23, 0.18)',
        gold: '0 14px 35px rgba(184, 138, 68, 0.28)',
      },
      animation: {
        fadeUp: 'fadeUp 900ms ease-out both',
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
