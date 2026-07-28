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
          200: '#bcd2ff',
          300: '#8eb5ff',
          400: '#598dff',
          500: '#3366ff',
          600: '#1a44f5',
          700: '#1433e1',
          800: '#162bb6',
          900: '#182a8f',
          950: '#131c57',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dbe2f0',
          200: '#bcc9e3',
          300: '#8fa8d0',
          400: '#5c81b7',
          500: '#3b639c',
          600: '#2b4b7e',
          700: '#233d65',
          800: '#1b2f4f',
          900: '#0f1f38',
          950: '#0a1426',
        },
        slate: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b1bbc9',
          400: '#8695ab',
          500: '#677891',
          600: '#526178',
          700: '#434e62',
          800: '#3a4353',
          900: '#343a47',
          950: '#22272f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
