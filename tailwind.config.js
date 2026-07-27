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
          DEFAULT: '#1A3C6E',
          50: '#EEF3FA',
          100: '#D5E2F4',
          600: '#1A3C6E',
          700: '#152F57',
          800: '#0F2240',
          900: '#0A1629',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

