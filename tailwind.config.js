/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#8C8279',
          warm: '#C7A27A',
          accent: '#B08D57',
          border: '#E6E0D6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(28,25,23,0.06)',
      }
    },
  },
  plugins: [],
}
