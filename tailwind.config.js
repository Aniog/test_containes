/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF7F2',
          gold: '#C9A94E',
          'gold-hover': '#B8922E',
          'gold-light': '#F5F0E8',
          charcoal: '#1C1C1C',
          'warm-gray': '#6B6B6B',
          taupe: '#E5E0D8',
          'deep-base': '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
