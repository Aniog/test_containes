/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black':    '#000000',
        'cinema-void':     '#0a0a0a',
        'cinema-dark':     '#111111',
        'cinema-charcoal': '#1a1a1a',
        'cinema-ash':      '#333333',
        'cinema-silver':   '#666666',
        'cinema-mist':     '#999999',
        'cinema-smoke':    '#cccccc',
        'cinema-pearl':    '#e5e5e5',
        'cinema-white':    '#ffffff',
        'cinema-gold':     '#c9a84c',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'cinema': '0.2em',
        'cinema-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1.4s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
