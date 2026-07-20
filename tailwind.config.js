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
          ivory: '#F7F1E8',
          cream: '#FFF9F0',
          ink: '#241913',
          espresso: '#3A251B',
          umber: '#6F4E37',
          champagne: '#C8A46A',
          gold: '#A77A3D',
          blush: '#E8D9CC',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(58, 37, 27, 0.10)',
        glow: '0 20px 45px rgba(200, 164, 106, 0.22)',
      },
    },
  },
  plugins: [],
}
