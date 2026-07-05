/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          DEFAULT: '#0F0F0F',
          50: '#F5F0EB',
          100: '#E8E0D6',
          200: '#A09890',
          300: '#8A7A5A',
          400: '#2A2A2A',
          500: '#222222',
          600: '#1A1A1A',
          700: '#0F0F0F',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B97F',
          muted: '#8A7A5A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
