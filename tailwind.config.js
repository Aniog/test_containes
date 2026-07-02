/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#faf8f5',
          warm: '#2b2725',
          gold: '#b8945a',
          'gold-light': '#d4b978',
          'gold-dark': '#9a7b42',
          muted: '#8c8780',
          border: '#e8e4df',
          surface: '#ffffff',
          'surface-hover': '#f7f5f2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
