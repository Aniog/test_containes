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
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#1E3A5F',
          200: '#254875',
          300: '#2D5A8E',
        },
        gold: {
          DEFAULT: '#C8973E',
          50: '#F5ECD7',
          100: '#E8D5A8',
          200: '#D4AD6A',
          300: '#B8862D',
          400: '#A07628',
          500: '#8A6622',
        },
        steel: {
          DEFAULT: '#1E3A5F',
          light: '#2D5A8E',
          dark: '#152C4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
