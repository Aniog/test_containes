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
        espresso: '#1C1612',
        taupe: '#8C7B6E',
        gold: '#B88A4E',
        'gold-hover': '#9C7340',
        'gold-light': '#D4B87A',
        hairline: '#E8E0D5',
        'warm-dark': '#2C2416',
        star: '#C5903A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
