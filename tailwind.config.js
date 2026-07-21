/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B87A',
          dark: '#B8944F',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#333333',
          muted: '#666666',
        },
        cream: {
          DEFAULT: '#FAFAF8',
          dark: '#F5F3EF',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
