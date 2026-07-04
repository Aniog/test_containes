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
          ivory: '#F7F0E6',
          porcelain: '#FFFBF5',
          espresso: '#211A16',
          cocoa: '#4B372C',
          taupe: '#8E7B6C',
          champagne: '#C9A46A',
          antique: '#8C6A3D',
          blush: '#EAD8C8',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(33, 26, 22, 0.12)',
        glow: '0 18px 60px rgba(201, 164, 106, 0.22)',
      },
      letterSpacing: {
        product: '0.22em',
      },
    },
  },
  plugins: [],
}
