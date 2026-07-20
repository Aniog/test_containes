/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f3efe9',
          200: '#eae3d9',
          300: '#d9cfc2',
          400: '#c4b5a3',
        },
        ink: {
          50: '#f6f5f4',
          100: '#e7e4e0',
          200: '#cfc9c0',
          300: '#b0a798',
          400: '#8f8474',
          500: '#73685a',
          600: '#5a5045',
          700: '#453e36',
          800: '#2e2924',
          900: '#1c1916',
          950: '#0f0e0c',
        },
        gold: {
          50: '#fdf8ef',
          100: '#f9ecd4',
          200: '#f2d5a6',
          300: '#e8b56e',
          400: '#d99a45',
          500: '#c8842e',
          600: '#aa6922',
          700: '#874f1d',
          800: '#70401d',
          900: '#60361c',
          950: '#371b0c',
        },
      },
      letterSpacing: {
        widest: '0.2em',
        superwide: '0.3em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
