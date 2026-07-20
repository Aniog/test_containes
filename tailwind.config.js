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
          espresso: '#1D1714',
          cocoa: '#332720',
          ivory: '#F8F3EA',
          parchment: '#EFE4D4',
          champagne: '#C8A46D',
          antique: '#9F7A43',
          mist: '#D8CBB9',
          rose: '#7E4E45',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(29, 23, 20, 0.12)',
        glow: '0 18px 55px rgba(200, 164, 109, 0.22)',
      },
      animation: {
        'soft-rise': 'soft-rise 700ms ease-out both',
        'fade-in': 'fade-in 500ms ease-out both',
      },
      keyframes: {
        'soft-rise': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
