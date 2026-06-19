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
          cream: '#F7F4F0',
          sand: '#E8E2DA',
          taupe: '#B8AFA3',
          charcoal: '#2C2A26',
          gold: '#C9A962',
          goldLight: '#D4BC7D',
          goldDark: '#A68B4B',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
      }
    },
  },
  plugins: [],
}
