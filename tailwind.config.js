/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft pearl/alabaster
        foreground: '#2C2B29', // Soft black/charcoal
        primary: '#E8D5B5',   // Soft gold accent
        'primary-dark': '#C9AC7A', // Darker gold for hover
        secondary: '#EBEAE5', // Light gray/beige for backgrounds
        muted: '#8A8780',     // Muted text
        borders: '#E2DFD8',   // Thin dividers
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 43, 41, 0.05)',
      }
    },
  },
  plugins: [],
}
