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
          ink: '#1F1814',
          espresso: '#3A2A21',
          cream: '#F7F1E8',
          parchment: '#EFE3D2',
          champagne: '#D8B46A',
          antique: '#A9783D',
          rose: '#D6B8A8',
          stone: '#76685F',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.22em',
        luxury: '0.16em',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(31, 24, 20, 0.12)',
        glow: '0 18px 45px rgba(216, 180, 106, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'drawer-in': 'drawerIn 320ms ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawerIn: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
