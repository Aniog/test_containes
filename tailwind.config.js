/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c1',
          400: '#91919e',
          500: '#747483',
          600: '#5e5e6b',
          700: '#4d4d57',
          800: '#42424a',
          900: '#1b1b2f',
          950: '#0f0f1e',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdd88',
          300: '#ffc74a',
          400: '#ffb320',
          500: '#f99007',
          600: '#dd6a02',
          700: '#b74906',
          800: '#94370c',
          900: '#7a2e0d',
          950: '#461602',
        },
        steel: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b9c8',
          400: '#8692a8',
          500: '#67748e',
          600: '#525d75',
          700: '#434c5f',
          800: '#3a4150',
          900: '#343945',
          950: '#23262e',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
