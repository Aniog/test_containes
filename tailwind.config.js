/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F2ED',
          200: '#EBE6DE',
          300: '#DED5C8',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B3B3B3',
          400: '#8C8C8C',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9EDDA',
          200: '#F2DAB5',
          300: '#E8C180',
          400: '#D4A55A',
          500: '#C9983F',
          600: '#B07D2D',
          700: '#8A6223',
          800: '#6B4C1C',
          900: '#4A3514',
        },
        warm: {
          50: '#FAF8F6',
          100: '#F3EDE6',
          200: '#E8DDD3',
          300: '#D9C8B8',
          400: '#C9AF9A',
          500: '#B8997F',
          600: '#A6846A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
