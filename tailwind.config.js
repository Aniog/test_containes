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
          ink: '#171411',
          cream: '#F7F1E8',
          parchment: '#EFE4D3',
          champagne: '#C8A46A',
          bronze: '#8A623A',
          mist: '#D8CDBE',
          rose: '#B78973',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 20, 17, 0.10)',
        editorial: '0 30px 90px rgba(23, 20, 17, 0.16)',
      },
      letterSpacing: {
        luxury: '0.22em',
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
