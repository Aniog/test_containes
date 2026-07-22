/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        secondary: '#F3F2EE',
        foreground: '#2B2521',
        primary: {
          DEFAULT: '#B89E78',
          foreground: '#FAFAFA'
        },
        muted: {
          DEFAULT: '#97948F',
          foreground: '#F3F2EE'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '.2em'
      }
    },
  },
  plugins: [],
}
