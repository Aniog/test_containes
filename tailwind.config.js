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
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#4A4A4A',
          600: '#333333',
          700: '#262626',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        gold: {
          50: '#FDF9F0',
          100: '#FAF0D9',
          200: '#F3DDB0',
          300: '#E8C77A',
          400: '#D4AD50',
          500: '#C9A96E',
          600: '#B8923E',
          700: '#9A7832',
          800: '#7D6028',
          900: '#5E4820',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 25px -5px rgba(0, 0, 0, 0.08)',
        'elevated': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
