/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F0EA',
        },
        charcoal: '#1C1917',
        stone: '#57534E',
        gold: {
          DEFAULT: '#B08D57',
          dark: '#8B6F3A',
          light: '#D4B896',
        },
        border: '#E7E0D8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
      },
    },
  },
  plugins: [],
}
