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
          cream: '#FFF9F0',
          stone: '#E6D8C4',
          taupe: '#A88F72',
          gold: '#B88746',
          goldDark: '#7A522A',
          espresso: '#241A16',
          ink: '#3A2B24',
          blush: '#EBD8CC',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(36, 26, 22, 0.10)',
        card: '0 18px 42px rgba(36, 26, 22, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
