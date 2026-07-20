/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        gold: {
          DEFAULT: '#C4965A',
          dark: '#A67C42',
          light: '#F5E6D3',
        },
        warm: {
          50: '#FDF8F3',
          100: '#F5EDE3',
          200: '#E8DDD0',
          300: '#D4C4B0',
          400: '#B8A08A',
          500: '#9A8068',
          600: '#7A6450',
          700: '#5C4A3A',
          800: '#3F3226',
          900: '#241C14',
        },
        ink: '#1A1A1A',
        muted: '#6B5E52',
        border: '#E8DDD0',
        'border-light': '#F0EAE0',
        success: '#2D6A4F',
        error: '#C44545',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.15em',
        widest: '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
