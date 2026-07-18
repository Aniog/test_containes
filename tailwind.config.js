/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'black': '#1a1815',
          'cream': '#faf8f5',
          'gold': '#c4a265',
          'gold-dark': '#a88645',
          'espresso': '#2c241b',
          'muted': '#8c8279',
          'sand': '#f0ebe3',
          'rose': '#d4a5a5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      }
    },
  },
  plugins: [],
}
