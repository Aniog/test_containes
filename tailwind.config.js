/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#FAF8F5',
          100: '#F5F2ED',
          200: '#EBE6DE',
          300: '#D9D1C5',
          400: '#B8AFA0',
          500: '#9A8F7E',
          600: '#7A7062',
          700: '#6B6560',
          800: '#3D3832',
          900: '#1C1C1E',
          950: '#141416',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9F0D8',
          200: '#F2E0B0',
          300: '#E8CB7E',
          400: '#DAB54F',
          500: '#C8A45C',
          600: '#B8923E',
          700: '#94732F',
          800: '#7A5E2A',
          900: '#654E25',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
