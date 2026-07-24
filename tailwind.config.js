/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#FBF9F6',
        gold: {
          50: '#F5F0E8',
          100: '#EDE3D0',
          200: '#DBC8A0',
          300: '#C9A96E',
          400: '#B8954F',
          500: '#9C7D3E',
        },
        warm: {
          50: '#F8F6F3',
          100: '#F0EDE8',
          200: '#E8E5E0',
          300: '#D4D0CA',
          400: '#A8A39D',
          500: '#8C8985',
          600: '#6B6865',
          700: '#4A4845',
          800: '#2C2B2A',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
