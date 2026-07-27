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
          DEFAULT: '#1e3a5f',
          light: '#2d5a8a',
          dark: '#152a45',
        },
        gold: {
          DEFAULT: '#c9922b',
          light: '#e8b84b',
          dark: '#a67a22',
        },
        surface: '#f5f7fa',
        'text-secondary': '#5a6a7e',
      },
    },
  },
  plugins: [],
}
