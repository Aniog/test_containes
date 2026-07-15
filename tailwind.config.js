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
          cream: '#FAF7F2',
          dark: '#1C1917',
          gold: '#B88A4D',
          'gold-light': '#D4A96A',
          muted: '#8C8279',
          hairline: '#E5E0D8',
          'warm-gray': '#F2EEE8',
          'deep-brown': '#2A2420',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}
