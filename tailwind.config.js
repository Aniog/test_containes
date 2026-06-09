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
          50: '#f4f6f9',
          100: '#e4e8ef',
          200: '#c8d0df',
          300: '#9dabc4',
          400: '#6c80a2',
          500: '#4a5f82',
          600: '#374a6a',
          700: '#2d3c56',
          800: '#1e2a40',
          900: '#111a2c',
          950: '#0a0f1a',
        },
        accent: {
          50: '#fdf7ef',
          100: '#fae9d1',
          200: '#f4d0a1',
          300: '#edb36e',
          400: '#e6943e',
          500: '#d97a24',
          600: '#b7621c',
          700: '#954b1b',
          800: '#783d1c',
          900: '#63341b',
          950: '#38180c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
