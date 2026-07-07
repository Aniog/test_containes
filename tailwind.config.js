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
          cream: '#EFE5D6',
          linen: '#E4D2BC',
          espresso: '#241A16',
          cocoa: '#4A372F',
          bronze: '#A8733A',
          champagne: '#D7B37A',
          blush: '#C8A39A',
          mist: '#FBF8F3',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(36, 26, 22, 0.10)',
        glow: '0 18px 50px rgba(168, 115, 58, 0.18)',
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
