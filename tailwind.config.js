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
          DEFAULT: '#0F172A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#0052CC',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8FAFC',
          foreground: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
