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
          100: '#FBF8F3',
          200: '#F5F0E8',
          300: '#E8E2D6',
          400: '#D4CBB8',
        },
        taupe: {
          50: '#F8F6F3',
          100: '#EDE8E0',
          200: '#D4CBB8',
          300: '#B8AB93',
          400: '#9B8B72',
          500: '#6B6358',
          600: '#5A5248',
          700: '#4A433B',
          800: '#3A352F',
          900: '#2A2622',
        },
        gold: {
          50: '#FDF8F0',
          100: '#F9EDD6',
          200: '#F2D9A8',
          300: '#E8C07A',
          400: '#D4A85A',
          500: '#C99B5B',
          600: '#B8893E',
          700: '#9A7030',
          800: '#7D5A28',
          900: '#5E4420',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
          lighter: '#4A4A4A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.16em',
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}
