/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#faf8f5',
          100: '#f5efe8',
          200: '#e8ddd0',
          300: '#d4c3ad',
          400: '#b8a088',
          500: '#a0846a',
          600: '#8b6f58',
          700: '#725a48',
          800: '#5d493b',
          900: '#4a3a30',
          950: '#2a1f19',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9f0db',
          200: '#f2deb2',
          300: '#e9c77e',
          400: '#dfae4e',
          500: '#d4982f',
          600: '#bf7e24',
          700: '#9e6220',
          800: '#7f4f1f',
          900: '#69421d',
          950: '#3a210d',
        },
        cream: '#faf8f5',
        deep: '#1a1614',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        'widest-plus': '0.22em',
      },
    },
  },
  plugins: [],
}
