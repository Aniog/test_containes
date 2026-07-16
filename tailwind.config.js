/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        charcoal: '#1C1917',
        gold: {
          DEFAULT: '#B5956B',
          dark: '#9E7E56',
          light: '#D4BC9A',
        },
        taupe: '#8C7E72',
        warm: '#E8E2DA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
