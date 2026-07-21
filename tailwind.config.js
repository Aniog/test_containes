/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#FFFEF9',
        champagne: '#F5E6D3',
        sand: '#E8DDD4',
        taupe: '#8B7E74',
        espresso: '#3D3530',
        charcoal: '#2C2826',
        gold: {
          50: '#FDF9F3',
          100: '#F9F0E3',
          200: '#F2DEC5',
          300: '#E8C69D',
          400: '#D4A574',
          500: '#C49464',
          600: '#B07E4F',
          700: '#8F6540',
          800: '#755336',
          900: '#61462E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
