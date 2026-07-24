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
          50: '#FEFDFB',
          100: '#FAF8F5',
          200: '#F5F1EC',
          300: '#EDE8E0',
          400: '#E0D9CE',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E3',
          200: '#C5C0BA',
          300: '#9B9590',
          400: '#6B6560',
          500: '#4A4540',
          600: '#3A3530',
          700: '#2C2824',
          800: '#1A1715',
          900: '#110F0E',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F5EDD8',
          200: '#EBDBB2',
          300: '#DCC88A',
          400: '#C4A35A',
          500: '#B08D3E',
          600: '#9A7A32',
          700: '#7D6328',
          800: '#5F4B1E',
          900: '#423414',
        },
        rose: {
          50: '#FDF5F3',
          100: '#FCE8E3',
          200: '#F5CAC0',
          300: '#E8A496',
          400: '#D4796B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'heading-4': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.005em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(26, 23, 21, 0.12)',
        'card': '0 4px 20px -4px rgba(26, 23, 21, 0.08)',
      },
    },
  },
  plugins: [],
}
