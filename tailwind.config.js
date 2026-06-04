/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          light: '#F5EBE0',
          DEFAULT: '#E8D5C4',
          warm: '#D4A88C',
          deep: '#B8846A',
        },
        forest: {
          light: '#A8C8A0',
          DEFAULT: '#5A7D4A',
          deep: '#2D4A24',
          dark: '#1A2E14',
        },
        sky: {
          pale: '#D6E6F2',
          light: '#A4C8E8',
          DEFAULT: '#6B9BC4',
          deep: '#3D6F94',
        },
        stone: {
          warm: '#F5F0EB',
          DEFAULT: '#E8E2D9',
        },
      },
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 12s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}
