/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F5',
        cream: '#F5F0EB',
        champagne: '#E8DED3',
        warmgray: '#D4C9BD',
        taupe: '#8B7E74',
        espresso: '#3D3229',
        gold: {
          50: '#FDF9F0',
          100: '#F7EDDA',
          200: '#EFDAB5',
          300: '#E4C78A',
          400: '#D4AD5F',
          500: '#C49A3D',
          600: '#B8862B',
          700: '#9A6F24',
          800: '#7D5A1F',
          900: '#664819',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
