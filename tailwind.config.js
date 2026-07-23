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
          ink: '#251914',
          espresso: '#3A261E',
          cream: '#F7F0E7',
          parchment: '#EFE3D3',
          linen: '#FBF7F0',
          gold: '#B88746',
          brass: '#D4B27A',
          clay: '#8B604A',
          border: '#D8C7B3',
        },
      },
      fontFamily: {
        serifDisplay: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        softGold: '0 20px 60px rgba(58, 38, 30, 0.10)',
        editorial: '0 30px 80px rgba(37, 25, 20, 0.18)',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'soft-reveal': 'softReveal 0.9s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softReveal: {
          '0%': { opacity: '0', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
