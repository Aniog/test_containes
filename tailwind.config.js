/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F9F7F3',
          200: '#F2EDE5',
          300: '#E8E0D4',
        },
        charcoal: {
          800: '#2A2725',
          900: '#1C1A18',
          950: '#0F0E0D',
        },
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B08D1E',
        },
        warm: {
          100: '#F5F0EB',
          200: '#EBE3DA',
          300: '#DDD2C4',
          400: '#C4B5A3',
          500: '#A8947E',
          600: '#8C7862',
        },
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      },
    },
  },
  plugins: [],
}
