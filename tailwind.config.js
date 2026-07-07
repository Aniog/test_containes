/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        champagne: {
          DEFAULT: '#C9A96E',
          dark: '#B08D4F',
          light: '#D4BC8A',
        },
        charcoal: '#1C1917',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
