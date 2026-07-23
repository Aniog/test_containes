/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#1A1817',
        primary: '#1A1817',
        'primary-foreground': '#FAF8F5',
        accent: '#D4AF37', // Warm metallic gold
        'accent-foreground': '#1A1817',
        muted: '#F0ECE6',
        'muted-foreground': '#5C5855',
        border: '#E8E2D9'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
