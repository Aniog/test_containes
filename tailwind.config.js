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
          ink: '#17110D',
          espresso: '#2A1C15',
          cream: '#F8F1E7',
          pearl: '#FFFDF8',
          linen: '#E9DCC9',
          champagne: '#C69B5C',
          bronze: '#8C6239',
          mist: '#766D64',
          rose: '#D8B8A8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(42, 28, 21, 0.10)',
        glow: '0 18px 50px rgba(198, 155, 92, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
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
