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
          bg: '#F7F3ED',
          'bg-alt': '#EDE6DA',
          surface: '#FFFFFF',
          ink: '#2A2420',
          'ink-muted': '#6E645A',
          accent: '#A96E4B',
          'accent-hover': '#8D593C',
          gold: '#C8A575',
          hairline: '#D9CFC2',
          error: '#B54242',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'velmora': '0.22em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
