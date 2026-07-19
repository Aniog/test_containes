/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velvet: {
          50: '#F8F5F0',
          100: '#F0EAE0',
          200: '#E8E2D8',
          300: '#D4CCC0',
          400: '#B8AFA0',
          500: '#9C958C',
          600: '#6B655E',
          700: '#4A4540',
          800: '#2C2926',
          900: '#1C1C1C',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          dark: '#8B6508',
        },
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.12em',
      },
    },
  },
  plugins: [],
}
