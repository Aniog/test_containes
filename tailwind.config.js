/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#f6f1ea',
          champagne: '#eadfce',
          espresso: '#261b17',
          taupe: '#7d6f67',
          gold: '#cba96c',
          line: '#d9cbbc',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
