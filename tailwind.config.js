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
        charcoal: '#1A1A1A',
        gold: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
          light: '#D4A843',
        },
        muted: {
          DEFAULT: '#6B6560',
          bg: '#F0EBE3',
        },
        border: '#E8E2D9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
        section: '0.05em',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
