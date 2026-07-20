/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9F7F2',
        foreground: '#1C1C1C',
        brand: {
          onyx: '#1C1C1C',
          parchment: '#F9F7F2',
          gold: '#C5A059',
        },
        primary: {
          DEFAULT: '#1C1C1C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1EFE9',
          foreground: '#1C1C1C',
        },
        accent: {
          DEFAULT: '#C5A059',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
