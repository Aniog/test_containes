/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        espresso: '#1A1612',
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8944F',
          light: '#F5EDE0',
          muted: '#D4C9B8',
        },
        warm: {
          50: '#FAF7F2',
          100: '#F5EDE0',
          200: '#E8E0D4',
          300: '#D4C9B8',
          400: '#9B8E80',
          500: '#6B5E50',
          600: '#4A3F35',
          700: '#2E2620',
          800: '#1A1612',
          900: '#0F0D0A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'product': '0.15em',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
