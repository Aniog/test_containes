/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf6f0',
          100: '#f0e8d8',
          200: '#e0d0b0',
          300: '#d0b888',
          400: '#c0a060',
          500: '#b08840',
          600: '#8a6a32',
          700: '#645026',
          800: '#3e341a',
          900: '#282210',
        },
        warm: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f5efd8',
          300: '#ede3bc',
          400: '#dcc79a',
          500: '#c4a87a',
          600: '#a88a5e',
          700: '#8a6e46',
          800: '#6e5434',
          900: '#4a3724',
        },
        dark: {
          50: '#f6f5f3',
          100: '#e8e6e2',
          200: '#d1cec5',
          300: '#b3ada0',
          400: '#9a9280',
          500: '#857a68',
          600: '#6f6555',
          700: '#5a5144',
          800: '#3d372e',
          900: '#1c1916',
          950: '#0f0d0b',
        },
        cream: '#faf7f0',
        gold: '#c4a87a',
        goldLight: '#ede3bc',
        goldDark: '#8a6e46',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
