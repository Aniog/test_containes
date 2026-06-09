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
          50: '#eef2f7',
          100: '#d4deed',
          200: '#a9bddb',
          300: '#7e9cc9',
          400: '#537bb7',
          500: '#3a629e',
          600: '#1a3a5c',
          700: '#152e4a',
          800: '#102238',
          900: '#0b1626',
        },
        gold: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f3dbb5',
          300: '#edc990',
          400: '#e7b76b',
          500: '#d4953a',
          600: '#b87a2a',
          700: '#8f5f20',
          800: '#664316',
          900: '#3d280c',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
