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
          gold: '#C9A96E',
          'gold-light': '#D4B87A',
          'gold-dark': '#B8944F',
          'gold-muted': '#E8D5B0',
          'gold-pale': '#F5EDE0',
        },
        surface: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A',
          tertiary: '#242424',
          elevated: '#2A2A2A',
          ivory: '#FAF8F5',
          cream: '#F5F0E8',
          warm: '#FFFDF9',
        },
        text: {
          primary: '#FAF8F5',
          secondary: '#B8B0A4',
          muted: '#7A7368',
          dark: '#1A1816',
          'dark-secondary': '#4A4640',
        },
        accent: {
          success: '#4A7C59',
          error: '#9B3B3B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'heading-2': ['2rem', { lineHeight: '1.15', letterSpacing: '0.025em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'overline': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.08)',
        'elevated': '0 8px 40px rgba(0,0,0,0.12)',
        'gold': '0 4px 24px rgba(201,169,110,0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
