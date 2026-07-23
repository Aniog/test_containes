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
          porcelain: '#F8F3EA',
          pearl: '#FFFBF4',
          mist: '#EFE7D8',
          sand: '#D8C7A9',
          taupe: '#8E7C66',
          gold: '#B98A3D',
          champagne: '#E6C98B',
          espresso: '#241A16',
          ink: '#2D241F',
          clay: '#6B4E3F',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(36, 26, 22, 0.10)',
        glow: '0 18px 50px rgba(185, 138, 61, 0.22)',
      },
      letterSpacing: {
        luxe: '0.22em',
        wideLuxe: '0.32em',
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
