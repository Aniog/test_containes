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
        velmora: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f0d4b0',
          300: '#e5b47d',
          400: '#d98e4a',
          500: '#c97a32',
          600: '#a8622a',
          700: '#874d24',
          800: '#6e3f1f',
          900: '#5a3419',
          950: '#2f1a0d',
        },
        gold: {
          light: '#D4AF37',
          DEFAULT: '#B8860B',
          dark: '#8B6914',
        },
        cream: '#FAF7F0',
        charcoal: '#1A1A1A',
        warmgray: '#8A8580',
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
