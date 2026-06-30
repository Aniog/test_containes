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
          deep: '#1A1817',
          cream: '#FBF8F4',
          sand: '#F2ECE1',
          gold: '#C8A44E',
          'gold-dark': '#B0893A',
          rose: '#D4A098',
          muted: '#8B8580',
          hairline: '#E8E2D6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
