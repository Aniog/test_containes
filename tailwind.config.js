/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6F0',
        sand: '#F3EDE4',
        charcoal: '#1C1917',
        stone: '#78716C',
        gold: '#B08D57',
        'gold-dark': '#8B6F3C',
        linen: '#E7E0D8',
        espresso: '#1C1917',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.08em',
        'btn': '0.1em',
        'caption': '0.05em',
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.17', fontWeight: '300' }],
        'h2': ['2.25rem', { lineHeight: '1.22', fontWeight: '400' }],
        'h3': ['1.5rem', { lineHeight: '1.33', fontWeight: '500' }],
        'product-name': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.15em' }],
        'caption': ['0.75rem', { lineHeight: '1.33', fontWeight: '500', letterSpacing: '0.05em' }],
        'btn': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      borderRadius: {
        'btn': '2px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(28, 25, 23, 0.06)',
        'card-hover': '0 8px 24px rgba(28, 25, 23, 0.12)',
        'drawer': '-4px 0 24px rgba(28, 25, 23, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-in': 'slide-in-right 0.3s ease-out forwards',
        'slide-out': 'slide-out-right 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
