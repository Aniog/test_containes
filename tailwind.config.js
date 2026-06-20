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
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dc',
          300: '#d4cfc3',
          400: '#b8b0a0',
          500: '#9c9282',
          600: '#7a7164',
          700: '#5c544a',
          800: '#3d3732',
          900: '#1f1c19',
          950: '#0f0e0c',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9efd8',
          200: '#f2dfb0',
          300: '#e9c980',
          400: '#dfb350',
          500: '#d4a028',
          600: '#b8861f',
          700: '#93671c',
          800: '#7a531d',
          900: '#66451d',
        },
        accent: {
          DEFAULT: '#c9a96e',
          hover: '#b8944f',
          muted: 'rgba(201, 169, 110, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 2px 16px rgba(31, 28, 25, 0.06)',
        lift: '0 8px 30px rgba(31, 28, 25, 0.10)',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
