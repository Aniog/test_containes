/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F0EBE3',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          dark: '#A8894A',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
        'warm-gray': {
          50: '#F5F0EB',
          100: '#EDE6DE',
          200: '#D4CFC8',
          300: '#B8B0A6',
          400: '#9C9488',
          500: '#6B6570',
          600: '#4A4550',
          700: '#3A353E',
        },
        border: {
          light: '#E8E4DE',
          medium: '#D4CFC8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
