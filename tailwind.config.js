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
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          charcoal: '#1A1A1A',
          warm: '#2C2420',
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-muted': '#C9A96E',
          taupe: '#8B7D6B',
          stone: '#6B5E50',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in-right 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
