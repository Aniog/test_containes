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
          50: '#fdfaf6',
          100: '#faf5ed',
          200: '#f5ece0',
          300: '#eddfcc',
          400: '#e0cdb0',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e8e8ea',
          200: '#d1d1d5',
          300: '#b0b0b8',
          400: '#858590',
          500: '#65656f',
          600: '#4d4d56',
          700: '#3d3d44',
          800: '#2e2e33',
          900: '#1f1f23',
          950: '#121214',
        },
        gold: {
          50: '#fef9ef',
          100: '#fdf0d5',
          200: '#f9e0b0',
          300: '#f4cb7d',
          400: '#eeb04d',
          500: '#d4962a',
          600: '#b87321',
          700: '#95511e',
          800: '#7a4220',
          900: '#65371f',
        },
        accent: {
          DEFAULT: '#d4962a',
          light: '#f4cb7d',
          dark: '#95511e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
        'widest-custom': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
