/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8944C',
          light: '#E8D5A3',
        },
        charcoal: '#1C1C1C',
        taupe: '#E5E0D6',
        beige: '#F0EBE3',
        'warm-dark': '#2D2D2D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
