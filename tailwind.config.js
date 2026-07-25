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
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#6B6560',
          subtle: '#9E9791',
          border: '#E8E4DF',
          gold: '#C9A96E',
          goldLight: '#E3D4B5',
          goldDark: '#A88B4A',
          warm: '#F3EDE6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26, 26, 26, 0.08)',
        gold: '0 10px 30px -10px rgba(201, 169, 110, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}
