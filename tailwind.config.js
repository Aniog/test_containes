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
          50: '#FEFCF9',
          100: '#FBF7F0',
          200: '#F5EDE0',
          300: '#EDE0CC',
          400: '#DFD0B5',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#2A2A2A',
          800: '#1E1E1E',
          900: '#141414',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF8E7',
          200: '#FFEFC2',
          300: '#FFE299',
          400: '#F0C65E',
          500: '#C8A04A',
          600: '#B8923E',
          700: '#A07C32',
          800: '#8B6B28',
          900: '#6B521F',
        },
        accent: {
          DEFAULT: '#C8A04A',
          light: '#F0C65E',
          dark: '#A07C32',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'hero': ['3.5rem', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'hero-lg': ['5rem', { lineHeight: '1.05', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
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
