/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        background: '#FAFAFA',
        secondary: '#F3EFE9',
        neutral: {
          900: '#1A1817',
          500: '#706C68',
          200: '#E6E1DC',
        },
        amber: {
          700: '#8C6239',
          800: '#6B4A2B',
        }
      }
    },
  },
  plugins: [],
}
