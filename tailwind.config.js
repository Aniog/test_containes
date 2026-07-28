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
          DEFAULT: '#0F2B3D',
          50: '#E6ECF0',
          100: '#C2D0D9',
          200: '#9BB4C4',
          300: '#7498AE',
          400: '#547E98',
          500: '#3A6480',
          600: '#2A4E66',
          700: '#1D3D52',
          800: '#0F2B3D',
          900: '#081A26',
        },
        teal: {
          DEFAULT: '#0A6E74',
          50: '#E6F4F4',
          100: '#C2E5E6',
          200: '#9BD4D6',
          300: '#73C3C5',
          400: '#4DB2B5',
          500: '#2EA0A3',
          600: '#168A8E',
          700: '#0A6E74',
          800: '#075458',
          900: '#043A3D',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
