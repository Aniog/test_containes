/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1A1A1A',
        primary: '#2B2B2B',
        'primary-foreground': '#FFFFFF',
        accent: '#D4AF37', // Warm gold
        'accent-hover': '#B8962E',
        muted: '#F0EFEB',
        'muted-foreground': '#6B6B6B',
        border: '#E8E6E1',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
