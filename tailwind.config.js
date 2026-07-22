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
          cream: '#F9F6F1',
          gold: '#D4AF37',
          stone: '#7A7A7A',
          charcoal: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.3em',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
