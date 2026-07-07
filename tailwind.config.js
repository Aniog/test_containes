/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-stone': '#3D3733',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#EDE7D9',
        'velmora-mist': '#D4CEC4',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A8854A',
        'velmora-text-dark': '#1A1714',
        'velmora-text-mid': '#5C5550',
        'velmora-text-light': '#F5F0E8',
        'velmora-text-muted': '#9C9490',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
