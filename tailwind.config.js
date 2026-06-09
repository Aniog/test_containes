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
          50:  '#f4f6f9',
          100: '#e8ecf2',
          200: '#cdd5e0',
          300: '#a8b6c8',
          400: '#7d92aa',
          500: '#5e7490',
          600: '#2e3d56',
          700: '#243044',
          800: '#1a2535',
          900: '#0f1923',
        },
        gold: {
          300: '#dfc98a',
          400: '#d4b86a',
          500: '#c9a84c',
          600: '#b8922e',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
