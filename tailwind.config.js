/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#B89768',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#EFECE6',
          foreground: '#666666',
        },
        border: '#E5E1D8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
