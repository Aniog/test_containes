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
          ink: '#171412',
          porcelain: '#F7F1E8',
          ivory: '#FFF9F1',
          champagne: '#E8D8BF',
          gold: '#B88945',
          olive: '#3F3A2F',
          taupe: '#74685D',
          line: '#D7C6AA',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 20, 18, 0.10)',
        glow: '0 16px 44px rgba(184, 137, 69, 0.22)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.95' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        softPulse: 'softPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
