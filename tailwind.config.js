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
          cream: '#FFFBF5',
          espresso: '#241915',
          umber: '#5C3B2E',
          oxblood: '#4A171C',
          champagne: '#C8A96A',
          mist: '#E8DED2',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(36, 25, 21, 0.08)',
        editorial: '0 28px 80px rgba(36, 25, 21, 0.16)',
      },
    },
  },
  plugins: [],
}
