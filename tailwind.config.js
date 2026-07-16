/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F4',
        surface: '#FFFDFB',
        espresso: '#2C2416',
        taupe: '#8B7E6E',
        accent: '#B8975A',
        'accent-dark': '#9C7D40',
        'warm-sand': '#E8DDD0',
        clay: '#F0EBE3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
