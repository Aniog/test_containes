/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A1A',
          gold: '#C5A059',
          cream: '#FBF9F6',
          stone: '#EBE6DE',
          muted: '#666666',
          accent: '#8B735B'
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        wider: '.1em',
      }
    },
  },
  plugins: [],
}