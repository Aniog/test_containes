/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        velmora: {
          background: '#FAF9F6',
          foreground: '#1A150E',
          accent: '#C5A059',
          muted: '#A69B8F',
          border: '#E5E2DD',
        }
      }
    },
  },
  plugins: [],
}
