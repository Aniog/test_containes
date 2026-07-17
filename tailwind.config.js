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
          cream: '#FAF7F2',
          warm: '#F5EDE3',
          sand: '#E8DDD0',
          gold: '#C9A96E',
          'gold-light': '#D4BA8A',
          'gold-dark': '#A8864E',
          charcoal: '#2C2C2C',
          'charcoal-light': '#3D3D3D',
          ink: '#1A1A1A',
          muted: '#8A8278',
          'muted-light': '#B5AFA7',
          border: '#E5DDD3',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'wide': '0.15em',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
