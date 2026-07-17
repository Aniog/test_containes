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
          espresso: '#15100D',
          cacao: '#2B211C',
          ivory: '#F7F0E6',
          porcelain: '#FFFBF5',
          sand: '#E7D7C3',
          gold: '#B8894A',
          bronze: '#7A5731',
          clay: '#B68472',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(21, 16, 13, 0.12)',
        glow: '0 18px 50px rgba(184, 137, 74, 0.22)',
      },
    },
  },
  plugins: [],
}
