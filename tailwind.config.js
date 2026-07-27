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
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#6B8DB5',
          500: '#2A5A8C',
          600: '#1B3A5C',
          700: '#142D47',
          800: '#0E1F31',
          900: '#081422',
        },
        accent: {
          50: '#FFF3E8',
          100: '#FFE0C2',
          200: '#FFCC96',
          300: '#FFB06A',
          400: '#E8772E',
          500: '#D06820',
          600: '#B85A18',
          700: '#9A4C12',
          800: '#7C3E0C',
          900: '#5E3006',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
