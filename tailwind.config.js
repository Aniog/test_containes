/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#211B18',
          espresso: '#342821',
          cream: '#F7F1E8',
          parchment: '#EFE3D2',
          champagne: '#D6B47A',
          brass: '#9C713B',
          rose: '#C9A99A',
          mist: '#FBF8F3',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 70px rgba(52, 40, 33, 0.14)',
        soft: '0 18px 45px rgba(33, 27, 24, 0.10)',
      },
      letterSpacing: {
        luxe: '0.22em',
      },
    },
  },
  plugins: [],
}
