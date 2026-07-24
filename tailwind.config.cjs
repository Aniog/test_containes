/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#F9F7F2',
        'velmora-gold': '#C5A059',
        'velmora-charcoal': '#1A1A1A',
        'velmora-cocoa': '#2C2421',
        'velmora-stone': '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-lg': '0.2em',
      }
    },
  },
  plugins: [],
}
