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
          DEFAULT: '#1E3A5F',
          dark: '#152C4A',
          light: '#2A4A73',
        },
        accent: {
          DEFAULT: '#C9A962',
          dark: '#A88A4A',
          light: '#D4BA7A',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          300: '#D4D4D4',
          500: '#737373',
          700: '#4A4A4A',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
