/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          100: '#E6EDF3',
          200: '#C9D1D9',
          400: '#8B949E',
          600: '#30363D',
          700: '#21262D',
          800: '#161B22',
          900: '#0D1117',
        },
        gold: {
          100: '#F5EDD0',
          300: '#E0CC8A',
          400: '#D4B96A',
          500: '#C9A84C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
