/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1614',
        'velmora-charcoal': '#2C2420',
        'velmora-ivory': '#FAF7F2',
        'velmora-cream': '#F2EDE4',
        'velmora-linen': '#E8E0D4',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A07840',
        'velmora-rose': '#C4907A',
        'velmora-text': '#1A1614',
        'velmora-muted': '#6B5E54',
        'velmora-subtle': '#9C8E84',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,22,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,22,20,0.12)',
        'drawer': '-4px 0 40px rgba(26,22,20,0.15)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
