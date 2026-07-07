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
          deep: '#1A1814',
          charcoal: '#2D2926',
          warm: '#3D3530',
          gold: '#C4956A',
          'gold-dark': '#A67B5B',
          'gold-light': '#E8D5B7',
          'gold-pale': '#F3E8D9',
          cream: '#FAF7F2',
          ivory: '#FFFEFB',
          muted: '#8A837B',
          border: '#E8E2DA',
          'border-light': '#F0ECE6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'heading-sm': ['1.375rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
