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
          DEFAULT: '#1B2A4A',
          light: '#2D4A7A',
          50: '#E8ECF3',
          100: '#D1D9E7',
          200: '#A3B3CF',
          300: '#758DB7',
          400: '#47679F',
          500: '#2D4A7A',
          600: '#1B2A4A',
          700: '#15213A',
          800: '#0F182B',
          900: '#0A0F1C',
        },
        gold: {
          DEFAULT: '#C8963E',
          light: '#D4A854',
          dark: '#A87A2E',
          50: '#FBF6ED',
          100: '#F5E9D0',
          200: '#EBD3A1',
          300: '#E1BD72',
          400: '#D4A854',
          500: '#C8963E',
          600: '#A87A2E',
          700: '#7F5D22',
          800: '#564017',
          900: '#2C200B',
        },
        warm: {
          bg: '#F8F7F4',
          surface: '#FFFFFF',
          border: '#E2E0DB',
          text: '#5A6B82',
          muted: '#8A96A8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
