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
          ivory: '#F7F1E7',
          porcelain: '#FFFDF8',
          espresso: '#211915',
          umber: '#5E4A3F',
          bronze: '#3A2A24',
          champagne: '#C8A46A',
          sand: '#E7D9C7',
          mist: '#F0E6D8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(33, 25, 21, 0.12)',
        glow: '0 18px 45px rgba(200, 164, 106, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
        'drawer-in': 'drawer-in 280ms ease-out both',
      },
    },
  },
  plugins: [],
}
