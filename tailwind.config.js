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
          ink: '#17120E',
          espresso: '#2A2019',
          cream: '#F7F1E8',
          parchment: '#EFE2D0',
          champagne: '#C8A76A',
          bronze: '#8B6A3F',
          blush: '#D9B8A8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(23, 18, 14, 0.12)',
        glow: '0 18px 50px rgba(200, 167, 106, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'slow-pan': 'slowPan 14s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.02) translateY(0)' },
          '100%': { transform: 'scale(1.08) translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
