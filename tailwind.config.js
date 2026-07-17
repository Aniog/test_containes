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
          charcoal: '#1C1917',
          espresso: '#292524',
          taupe: '#44403C',
          warm: '#78716C',
          cream: '#FAF8F5',
          ivory: '#F5F0EB',
          linen: '#EDE8E0',
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-pale': '#E8D5A3',
          'gold-wash': '#F5ECD7',
          rose: '#9F8B7C',
        },
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
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05' }],
        'display': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15' }],
        'section': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
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
