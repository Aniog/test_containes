/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          gold: '#C5A059',
          dark: '#121212',
          beige: '#F9F5F1',
          cream: '#FAF9F6',
          muted: '#71717A',
          border: '#E5E5E5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      }
    },
  },
  plugins: [],
}
