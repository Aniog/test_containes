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
          DEFAULT: '#1B4D7A',
          dark: '#0F3356',
        },
        accent: {
          DEFAULT: '#E8792F',
          dark: '#D06520',
        },
        neutral: {
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#E2E7ED',
          300: '#C8D1DA',
          600: '#5A6B7B',
          700: '#3D4F5F',
          900: '#1A2B3B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
