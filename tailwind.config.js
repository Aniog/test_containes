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
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8eccff',
          400: '#53b0ff',
          500: '#2b8eff',
          600: '#146eff',
          700: '#0d59f0',
          800: '#1147c1',
          900: '#143f97',
          950: '#11275c',
        },
        neutral: {
          850: '#1a1f2e',
          950: '#0d1117',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
