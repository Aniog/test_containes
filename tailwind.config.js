/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          cream: '#FAF8F5',
          sand: '#F5F0E8',
          taupe: '#C4B8A8',
          charcoal: '#2C2C2C',
          gold: '#C9A962',
          goldLight: '#E5D4A1',
          goldDark: '#9A7B3D',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}
