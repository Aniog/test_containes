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
          light: '#F9F8F6', // Warm, off-white background
          DEFAULT: '#E5D9C5', // Soft sand/neutral accent
          gold: '#C5A059', // Metallic warm gold highlight
          dark: '#2C2B29', // Deep dark brown/almost black for text
          muted: '#8E8B85', // Muted text/borders
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
