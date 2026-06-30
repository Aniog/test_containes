/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e6dfd3',
          300: '#d4c9b8',
          400: '#b8a88f',
          500: '#9c8a6e',
          600: '#7d6f56',
          700: '#5e5441',
          800: '#3f382d',
          900: '#1f1b16',
          950: '#0f0d0a',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d994',
          300: '#e9c35c',
          400: '#d4a83a',
          500: '#b8922e',
          600: '#947426',
          700: '#6e5620',
          800: '#4a3a18',
          900: '#261f0e',
        },
        cream: '#f7f4ef',
        ink: '#1a1714',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 2px 20px rgba(0, 0, 0, 0.04)',
        lift: '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
