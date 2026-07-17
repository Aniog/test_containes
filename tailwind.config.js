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
          ink: '#1F1713',
          espresso: '#2B211C',
          cream: '#F8F2EA',
          porcelain: '#FFFDF8',
          champagne: '#D8B978',
          antique: '#B4874F',
          taupe: '#6F5D51',
          blush: '#EFE1D8',
          hairline: '#E6D8C8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(31, 23, 19, 0.10)',
        lift: '0 18px 45px rgba(31, 23, 19, 0.16)',
      },
    },
  },
  plugins: [],
}
