/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7', // Soft warm cream
        foreground: '#1A1817', // Deep espresso black
        gold: {
          50: '#FAF5EA',
          100: '#F5EBD4',
          500: '#C5A059', // Accent gold
          600: '#A4823E',
          700: '#82652A',
        },
        stone: {
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
