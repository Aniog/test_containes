/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F5F0E8',
        },
        charcoal: {
          DEFAULT: '#2C2420',
          light: '#7A7066',
          muted: '#A59A8F',
        },
        gold: {
          DEFAULT: '#C9A96E',
          dark: '#B08D4E',
          light: '#D4A853',
        },
        beige: {
          DEFAULT: '#E8E1D5',
          light: '#F0EBE3',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.1em',
      },
    },
  },
  plugins: [],
}
