/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          ink: '#211C18',
          bark: '#3A2F28',
          cream: '#F7F1E8',
          linen: '#EFE4D4',
          champagne: '#C7A66A',
          brass: '#A77D3E',
          blush: '#E5CFC0',
          pearl: '#FFFDF8',
        },
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(33, 28, 24, 0.14)',
        soft: '0 14px 42px rgba(58, 47, 40, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'soft-pulse': 'softPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.82' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
