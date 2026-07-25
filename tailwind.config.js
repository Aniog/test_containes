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
          espresso: '#211814',
          ink: '#382922',
          ivory: '#F8F3EA',
          pearl: '#FFFDF8',
          champagne: '#E9DCC7',
          sand: '#C9B89D',
          gold: '#B88746',
          bronze: '#7A542E',
          blush: '#F0DED2',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sansBody: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(33, 24, 20, 0.12)',
        soft: '0 12px 40px rgba(33, 24, 20, 0.08)',
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
