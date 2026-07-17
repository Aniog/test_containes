/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50:  '#f0faf0',
          100: '#dcf5dc',
          200: '#b8eab8',
          300: '#86d886',
          400: '#52c152',
          500: '#2ea82e',
          600: '#228722',
          700: '#1c6b1c',
          800: '#185518',
          900: '#144514',
        },
        water: {
          50:  '#edfcf9',
          100: '#d2f7f1',
          200: '#a9ede4',
          300: '#6fddd2',
          400: '#38c5ba',
          500: '#1ea9a0',
          600: '#168882',
          700: '#156c68',
          800: '#155654',
          900: '#154846',
        },
        soil: {
          50:  '#fdf8f0',
          100: '#f9edda',
          200: '#f2d9b4',
          300: '#e8be84',
          400: '#dc9d52',
          500: '#d4832e',
          600: '#c06a23',
          700: '#9f521f',
          800: '#81421f',
          900: '#6a371c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
