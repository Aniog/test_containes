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
          cream: '#FAF8F5',          // Warm cream background
          'warm-white': '#F5F0EB',   // Slightly warmer white
          charcoal: '#2C2C2C',       // Deep refined base
          'soft-charcoal': '#3D3D3D', // Softer variant
          gold: '#C9A96E',           // Warm metallic accent
          'gold-light': '#D4B87A',   // Lighter gold
          'gold-dark': '#B8941E',    // Darker gold for hover
          rose: '#E8D5C8',           // Warm rose accent
          sand: '#EDE8E3',           // Neutral sand
          border: '#E5E0DB',         // Subtle dividers
          'text-primary': '#2C2C2C', // Primary text
          'text-secondary': '#6B6B6B', // Secondary text
          'text-muted': '#999999',   // Muted text
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'premium': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'transform': 'transform',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
