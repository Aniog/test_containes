/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        'ivory-dark': '#F2EDE5',
        obsidian: '#1A1714',
        'obsidian-light': '#2E2A26',
        stone: '#6B6560',
        'stone-light': '#9C9490',
        gold: '#C9A96E',
        'gold-light': '#E8D5A8',
        'gold-dark': '#A07840',
        blush: '#E8D5C4',
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
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        slideOutRight: 'slideOutRight 0.3s ease-in forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(201,169,110,0.12)',
        'drawer': '-4px 0 40px rgba(26,23,20,0.15)',
        'nav': '0 1px 20px rgba(26,23,20,0.08)',
      },
    },
  },
  plugins: [],
}
