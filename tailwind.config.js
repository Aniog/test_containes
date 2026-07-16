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
          100: '#FAF7F0',
          200: '#F5F0E6',
          300: '#EDE5D4',
          400: '#D9CEBA',
          500: '#C2B49A',
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#9E9E9E',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#3D3D3D',
          700: '#2E2E2E',
          800: '#1C1C1C',
          900: '#121212',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BC8B',
          dark: '#A8873D',
          50: '#FBF8F1',
          100: '#F5EDD9',
          200: '#EDDFBF',
          300: '#D4BC8B',
          400: '#C9A96E',
          500: '#B8954D',
          600: '#A8873D',
          700: '#8A6D2F',
          800: '#6B5424',
          900: '#4D3C19',
        },
        blush: {
          DEFAULT: '#D4A0A0',
          light: '#E8C4C4',
          50: '#FDF5F5',
          100: '#F8E8E8',
          200: '#E8C4C4',
          300: '#D4A0A0',
          400: '#C08080',
          500: '#A86060',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
