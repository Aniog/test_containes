/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F5F0E8',
        espresso: '#2C2420',
        cocoa: '#5C4D47',
        champagne: '#C9A962',
        goldLight: '#E8D5A3',
        silk: '#8B7E74',
        roseGold: '#B76E79',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'product': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.2em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      transitionTimingFunction: {
        'silk': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 36, 32, 0.08)',
        'elevated': '0 8px 30px rgba(44, 36, 32, 0.12)',
        'warm': '0 4px 20px rgba(201, 169, 98, 0.15)',
      },
    },
  },
  plugins: [],
}
