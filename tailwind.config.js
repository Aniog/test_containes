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
        surface: '#FFFFFF',
        charcoal: '#1A1A1A',
        taupe: '#6B6258',
        gold: '#C8A45C',
        'gold-hover': '#B8943E',
        beige: '#E5DFD8',
        'warm-light': '#F0ECE6',
        'deep-green': '#2D6A4F',
        'deep-red': '#9B2C2C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'wide-lg': '0.08em',
        'wide-xl': '0.12em',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'soft-lg': '0 4px 16px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
