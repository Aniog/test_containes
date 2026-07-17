/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velvet: {
          950: '#171210',
          900: '#241c19',
          800: '#3a2f2a',
          700: '#5a4b45',
          300: '#b8a89f',
          200: '#d8ccc4',
          100: '#eee6e1',
        },
        cream: {
          50: '#f8f2eb',
          100: '#f2e8dd',
          200: '#e3d3c0',
        },
        gold: {
          300: '#dbc49e',
          400: '#c4a674',
          500: '#ac8447',
        },
        rose: {
          100: '#f3e6df',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        editorial: '0 20px 60px rgba(23, 18, 16, 0.08)',
        lift: '0 10px 30px rgba(23, 18, 16, 0.12)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(90deg, rgba(23, 18, 16, 0.86) 0%, rgba(23, 18, 16, 0.45) 48%, rgba(23, 18, 16, 0.18) 100%)',
      },
    },
  },
  plugins: [],
}
