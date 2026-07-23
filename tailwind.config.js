/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        espresso: '#1C1917',
        gold: '#C4A265',
        'gold-light': '#F0E8D8',
        'gold-dark': '#A88A4D',
        muted: '#8B8378',
        'muted-light': '#B8B0A8',
        surface: '#F5F2ED',
        border: '#E8E3DA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
