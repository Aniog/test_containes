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
          900: '#0D1117',
          800: '#161B22',
          700: '#21262D',
          600: '#30363D',
          400: '#8B949E',
          200: '#C9D1D9',
          100: '#E6EDF3',
        },
        gold: {
          300: '#E0CC8A',
          400: '#D4B96A',
          500: '#C9A84C',
        },
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
