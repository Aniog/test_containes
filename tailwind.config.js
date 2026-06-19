/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FBF9F6',
          100: '#F5F1EB',
          200: '#EDE6DB',
          300: '#E0D5C5',
        },
        ink: {
          900: '#1A1614',
          800: '#2A2420',
          700: '#3E3630',
          600: '#5A5048',
          500: '#7A6E64',
          400: '#9A8E84',
          300: '#B8AEA4',
          200: '#D6CEC4',
          100: '#EDE8E2',
        },
        gold: {
          500: '#C5A265',
          400: '#D4B87A',
          300: '#E3CC95',
          600: '#A6834B',
        },
      },
      letterSpacing: {
        'widest': '0.25em',
        'super-wide': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
