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
          50: '#eef2ff',
          100: '#dce5fd',
          200: '#bacdfa',
          300: '#8dabf5',
          400: '#5f84ee',
          500: '#3b5de7',
          600: '#1e3a8a',
          700: '#1a3278',
          800: '#162a66',
          900: '#0f1d47',
        },
        accent: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fad7a5',
          300: '#f6ba6d',
          400: '#f19433',
          500: '#ed7d18',
          600: '#de630e',
          700: '#b84b0f',
          800: '#923c14',
          900: '#763313',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
