/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4F8A',
          dark: '#163f6e',
          light: '#EBF3FB',
        },
        accent: {
          DEFAULT: '#C0392B',
          dark: '#a93226',
        },
        brand: {
          dark: '#1A2332',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
