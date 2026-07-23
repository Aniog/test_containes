/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F5F0EB',
          sand: '#E8DDD3',
          warm: '#D4C5B5',
          gold: '#C9A96E',
          'gold-light': '#D4B87A',
          'gold-dark': '#B08D4F',
          charcoal: '#2C2C2C',
          'charcoal-light': '#3A3A3A',
          espresso: '#1A1A1A',
          'text-primary': '#2C2C2C',
          'text-secondary': '#6B6B6B',
          'text-muted': '#9A9A9A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.25em',
        'product': '0.2em',
      },
      borderWidth: {
        'hairline': '0.5px',
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
