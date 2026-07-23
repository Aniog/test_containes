/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          DEFAULT: '#1A1817',
          50: '#F5F4F2',
          100: '#E8E5E0',
          200: '#D1CCC4',
          300: '#B5AEA3',
          400: '#9A9082',
          500: '#7F7568',
          600: '#655C53',
          700: '#4A433C',
          800: '#302B25',
          900: '#1A1817',
        },
        gold: {
          DEFAULT: '#C8A55C',
          50: '#FBF7F0',
          100: '#F5ECDA',
          200: '#ECD9B5',
          300: '#DFC18B',
          400: '#D4AE65',
          500: '#C8A55C',
          600: '#B08C40',
          700: '#8A6C32',
          800: '#644D24',
          900: '#3E3016',
        },
        cream: {
          DEFAULT: '#FBF9F6',
          50: '#FDFCFA',
          100: '#FBF9F6',
          200: '#F5F1EA',
          300: '#EDE6D9',
          400: '#E5DBC8',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
