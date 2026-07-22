/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F0E8D3',
          300: '#E5D5B3',
        },
        warm: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EBE1D5',
          300: '#D4C4B0',
          400: '#B8A088',
          500: '#9C7F68',
          600: '#7D6350',
          700: '#5E4A3C',
          800: '#3F3229',
          900: '#2D231D',
          950: '#1A1410',
        },
        gold: {
          100: '#FDF6E3',
          200: '#F9E7B8',
          300: '#F2D285',
          400: '#E8B84B',
          500: '#D4A12E',
          600: '#B8861B',
          700: '#8B6315',
          800: '#6B4C12',
          900: '#4A3510',
        },
        accent: '#C4A35A',
        'accent-hover': '#B08D3E',
        'accent-light': '#E8D5A3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
