/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f0ece4',
          200: '#e0d6c4',
          300: '#cbb89e',
          400: '#b89a78',
          500: '#a8825a',
          600: '#916d4a',
          700: '#7a5b3f',
          800: '#664b38',
          900: '#564032',
          950: '#2e221b',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9ecc7',
          200: '#f3d88a',
          300: '#edbe4d',
          400: '#e8a820',
          500: '#d49114',
          600: '#b7720e',
          700: '#92520f',
          800: '#794114',
          900: '#683617',
          950: '#3d1b08',
        },
        midnight: {
          50: '#f5f6f7',
          100: '#e5e7eb',
          200: '#cdd1d9',
          300: '#aab0bd',
          400: '#818a9c',
          500: '#676f81',
          600: '#53596a',
          700: '#464b58',
          800: '#3d414b',
          900: '#1e1f26',
          950: '#121318',
        },
        cream: '#faf8f5',
        ivory: '#f5f0eb',
        clay: '#cbb89e',
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      height: {
        'screen-dynamic': '100dvh',
      },
    },
  },
  plugins: [],
}
