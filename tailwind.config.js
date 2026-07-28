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
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd0ff',
          300: '#8eb2ff',
          400: '#5988ff',
          500: '#3366ff',
          600: '#1a44f5',
          700: '#1333e1',
          800: '#162bb6',
          900: '#182a8f',
          950: '#131c57',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dce3f0',
          200: '#c0cde3',
          300: '#95acd0',
          400: '#6485b8',
          500: '#4468a3',
          600: '#345189',
          700: '#2b4270',
          800: '#27395e',
          900: '#1e2b48',
          950: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
