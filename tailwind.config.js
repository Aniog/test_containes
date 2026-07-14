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
        ivory: '#F5F0EB',
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8944F',
          light: '#E8D5A8',
        },
        charcoal: '#1C1917',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'product': '0.15em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
