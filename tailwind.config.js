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
          50: '#E8EDF5',
          100: '#C5D1E8',
          200: '#8FA3D0',
          300: '#5A76B9',
          400: '#2D4D91',
          500: '#0F2B5B',
          600: '#0C2249',
          700: '#091A37',
          800: '#061124',
          900: '#030912',
        },
        accent: {
          50: '#FDF0E8',
          100: '#FADCC5',
          200: '#F5B98F',
          300: '#F0965A',
          400: '#EB8440',
          500: '#E8763A',
          600: '#D06A34',
          700: '#B85E2D',
          800: '#A05227',
          900: '#884620',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
