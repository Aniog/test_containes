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
        gold: {
          50: '#FFF9EB',
          100: '#FFF0CC',
          200: '#FFE099',
          300: '#FFD066',
          400: '#D4A853',
          500: '#B07D2A',
          600: '#8E6420',
          700: '#6B4B18',
          800: '#483210',
          900: '#251908',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FDF8EF',
          200: '#FAF0DE',
          300: '#F5E5C8',
          400: '#EFDAAF',
          warm: { 50: '#F9F5EE' },
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D1CFC9',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
          950: '#060504',
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
