/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette for gold jewelry
        velmora: {
          cream: '#FAF8F5',
          beige: '#F5EDE4',
          warmGray: '#8A8078',
          charcoal: '#2D2926',
          gold: '#C9A96E',
          goldLight: '#D4B87A',
          goldDark: '#B8945A',
          ivory: '#FFFFF0',
          sage: '#9CAF88',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'premium': '300ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
