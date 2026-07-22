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
          pearl: '#EEE5D8',
          linen: '#D8C9B6',
          champagne: '#C7A46C',
          antique: '#9B7339',
          cocoa: '#4C382D',
          umber: '#2D211B',
          obsidian: '#18110E',
          rose: '#B98778',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(24, 17, 14, 0.10)',
        glow: '0 18px 48px rgba(199, 164, 108, 0.18)',
      },
      letterSpacing: {
        luxe: '0.18em',
      },
    },
  },
  plugins: [],
}
