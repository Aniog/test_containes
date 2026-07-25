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
          ink: '#171412',
          espresso: '#2A211C',
          ivory: '#F8F3EA',
          pearl: '#FFFDF8',
          sand: '#E7D8C3',
          champagne: '#C6A15B',
          bronze: '#8A6637',
          rose: '#D9B8A8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(42, 33, 28, 0.14)',
        glow: '0 20px 60px rgba(198, 161, 91, 0.24)',
      },
    },
  },
  plugins: [],
}
