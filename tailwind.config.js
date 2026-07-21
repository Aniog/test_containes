/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#171310',
        espresso: '#221B15',
        cream: '#F6F1E8',
        sand: '#EAE1D3',
        gold: '#C6A15B',
        'gold-soft': '#DCC79E',
        bronze: '#8A6D3B',
        stone: '#7C7265',
        fog: '#A79C8D',
        line: '#E2D8C6',
        'line-dark': '#3A3128',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}
