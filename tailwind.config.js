/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0F0E0E',
        surface: '#1A1918',
        'warm-white': '#F5F0EB',
        taupe: '#A89F94',
        accent: '#C8A97E',
        'accent-hover': '#D4BA8E',
        divider: '#2E2C2A',
        'light-text': '#1A1918',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
