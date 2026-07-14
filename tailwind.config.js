/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        surface: '#FFFFFF',
        'warm-black': '#1C1C1A',
        'warm-gray': '#6B6258',
        gold: '#C4956A',
        'gold-dark': '#A67C52',
        'warm-light': '#E8E0D6',
        'warm-border': '#E0D8CE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}
