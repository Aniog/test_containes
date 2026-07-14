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
          ink: '#211814',
          espresso: '#2B211D',
          cream: '#F7F0E7',
          linen: '#EFE3D4',
          champagne: '#C59A57',
          bronze: '#8E6235',
          sage: '#706F5C',
          blush: '#D8B8A5',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(33, 24, 20, 0.10)',
        editorial: '0 30px 90px rgba(33, 24, 20, 0.18)',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
    },
  },
  plugins: [],
}
