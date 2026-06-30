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
          cream: '#EFE4D3',
          linen: '#FBF8F2',
          espresso: '#1F1712',
          cacao: '#4B372B',
          champagne: '#C6A15B',
          bronze: '#8B673A',
          blush: '#E8D7C8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(31, 23, 18, 0.10)',
        glow: '0 18px 50px rgba(198, 161, 91, 0.22)',
      },
    },
  },
  plugins: [],
}
