/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FBF7EF',
          200: '#F5ECD9',
          300: '#EDDEC0',
          400: '#E0CBA0',
          500: '#D4B885',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EBE2D5',
          300: '#DDCEBA',
          400: '#CFBA9F',
          500: '#B89B7A',
          600: '#9C7D5E',
        },
        warm: {
          50: '#FDF8F3',
          100: '#FEF2E8',
          200: '#FDE4CD',
          300: '#FBD1A8',
          400: '#F5BD80',
          500: '#E8A657',
          600: '#D4923D',
          700: '#B3772E',
          800: '#8C5C24',
          900: '#6B4319',
        },
        velvet: {
          50: '#F8F6F4',
          100: '#EDE9E3',
          200: '#D9D1C7',
          300: '#C0B4A5',
          400: '#A69682',
          500: '#8C7B68',
          600: '#736455',
          700: '#5C4F43',
          800: '#3D342C',
          900: '#2C2520',
          950: '#1A1511',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
