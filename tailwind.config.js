/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        'warm-white': '#FFFDF8',
        brown: '#5C3D2E',
        'brown-dark': '#3B2314',
        'brown-light': '#8B6347',
        amber: '#D4873A',
        'amber-light': '#F2C07E',
        sage: '#7A8C6E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
