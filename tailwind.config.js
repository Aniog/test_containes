/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#1A1410',
        obsidian: '#0F0D0B',
        ivory: '#FAF7F2',
        cream: '#F2EDE4',
        linen: '#E8E0D4',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dark': '#A8854A',
        'text-primary': '#1A1410',
        'text-secondary': '#6B5E4E',
        'text-tertiary': '#9C8E7E',
        'text-on-dark': '#FAF7F2',
        'text-on-dark-muted': '#C4B49E',
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
        fadeInFast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
        fadeInFast: 'fadeInFast 0.3s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
      },
      boxShadow: {
        card: '0 8px 32px rgba(26,20,16,0.08)',
        'card-hover': '0 16px 48px rgba(26,20,16,0.14)',
        drawer: '-4px 0 24px rgba(26,20,16,0.12)',
      },
    },
  },
  plugins: [],
}
