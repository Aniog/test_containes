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
          50: '#f0f5fa',
          100: '#dce7f2',
          200: '#bcd2e6',
          300: '#8fb3d3',
          400: '#5d8dbc',
          500: '#3a6fa5',
          600: '#2a5789',
          700: '#24466e',
          800: '#1e3a5c',
          900: '#16304d',
          950: '#0A2540',
        },
        brand: {
          50: '#eef4ff',
          100: '#dbe7fe',
          200: '#bfd4fe',
          300: '#93b6fd',
          400: '#608dfa',
          500: '#3b66f6',
          600: '#1B5FE0',
          700: '#1c48c9',
          800: '#1e3ca2',
          900: '#1e3880',
          950: '#17244e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
