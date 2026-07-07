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
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f5f0e8',
          300: '#ede6d9',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        gold: {
          50: '#fdf9f0',
          100: '#fbf0db',
          200: '#f6e0b6',
          300: '#ecc67e',
          400: '#e2a84c',
          500: '#d4902a',
          600: '#c0781f',
          700: '#9f5d1b',
          800: '#834a1d',
          900: '#6d3d1b',
          950: '#3e1e0b',
        },
        rose: {
          50: '#fdf4f3',
          100: '#fce7e4',
          200: '#fbd2cc',
          300: '#f6b2a8',
          400: '#ef887a',
          500: '#e56350',
          600: '#d24532',
          700: '#b13626',
          800: '#932f23',
          900: '#7a2c23',
          950: '#42130f',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
