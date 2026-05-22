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
        espresso: '#2C1A0E',
        golden: '#D4882A',
        tan: '#E8C99A',
        'brown-700': '#7C4A1E',
        'brown-500': '#6B4C2A',
        'brown-100': '#F5E6D0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
