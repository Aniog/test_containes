/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A4A',
          50: '#E8EEF5',
          100: '#C5D3E5',
          200: '#8FAAC8',
          300: '#5A82AB',
          400: '#2E5A8E',
          500: '#0F2A4A',
          600: '#0C2240',
          700: '#091A33',
          800: '#061226',
          900: '#030A18',
        },
        'red-china': {
          DEFAULT: '#C8102E',
          50: '#FDEAED',
          100: '#F9C5CC',
          200: '#F28A99',
          300: '#E85066',
          400: '#D92843',
          500: '#C8102E',
          600: '#A80D26',
          700: '#880A1E',
          800: '#680716',
          900: '#48050F',
        },
        gold: {
          DEFAULT: '#D4A017',
          50: '#FDF6E3',
          100: '#F9E9B8',
          200: '#F2D06E',
          300: '#EBB824',
          400: '#D4A017',
          500: '#B38813',
          600: '#92700F',
          700: '#71580C',
          800: '#504008',
          900: '#2F2805',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
