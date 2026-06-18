/** @type {import('tailwindcss').Config} */
// Velmora Fine Jewelry — Design System v1
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        espresso: '#2C2420',
        parchment: '#F7F3EE',
        ivory: '#FDFAF6',
        linen: '#EDE8E1',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#6B6259',
        ghost: '#9E9189',
        star: '#D4A843',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        slideInLeft: 'slideInLeft 0.35s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      boxShadow: {
        card: '0 8px 32px rgba(26,23,20,0.08)',
        drawer: '-4px 0 24px rgba(26,23,20,0.12)',
        'card-hover': '0 16px 48px rgba(26,23,20,0.14)',
      },
    },
  },
  plugins: [],
}
