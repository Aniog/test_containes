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
        'cream-dark': '#F5F0EA',
        gold: '#C9A96E',
        'gold-hover': '#B89450',
        'text-primary': '#1C1C1C',
        'text-secondary': '#6B6258',
        divider: '#E5DED3',
        'nav-dark': '#1C1C1C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
