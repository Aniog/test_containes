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
          bg: '#FAF8F5',
          'bg-warm': '#F5F0EB',
          'bg-dark': '#1A1A1A',
          'bg-card': '#FFFFFF',
          text: '#1A1A1A',
          'text-secondary': '#6B6560',
          'text-muted': '#8A8178',
          gold: '#C9A96E',
          'gold-light': '#E8D5B0',
          'gold-dark': '#A8894E',
          taupe: '#B8A99A',
          'taupe-light': '#D4C8BC',
          border: '#E8E2DB',
          'border-light': '#F0EBE5',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'super-wide': '0.15em',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'elevated': '0 8px 40px rgba(0, 0, 0, 0.1)',
        'gold': '0 4px 20px rgba(201, 169, 110, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
