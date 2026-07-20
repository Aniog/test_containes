/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFAF6',
        'warm-white': '#F5F0EB',
        espresso: '#3C2415',
        gold: '#C8A45C',
        'warm-black': '#1A1410',
        taupe: '#E8E0D5',
        'muted-gold': '#F7F2E7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
    },
  },
  plugins: [],
}
