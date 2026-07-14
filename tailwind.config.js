/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFCFB',
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#C5A059',
          foreground: '#FFFFFF',
        },
        accent: '#C5A059',
        muted: '#F5F2F0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
      }
    },
  },
  plugins: [],
}
