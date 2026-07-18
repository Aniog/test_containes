/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'velmora': {
          'black': '#0d0d0d',
          'charcoal': '#1a1a1a',
          'dark': '#2a2a2a',
          'gray': '#3d3d3d',
          'muted': '#6b6b6b',
          'light-muted': '#999999',
          'cream': '#faf8f5',
          'warm-white': '#f5f0eb',
          'ivory': '#ede8e0',
          'gold': '#c8a96e',
          'gold-light': '#d4b97a',
          'gold-dark': '#b8923e',
          'rose-gold': '#c2836e',
        },
        // Semantic aliases
        'brand': {
          'bg': '#faf8f5',
          'bg-dark': '#0d0d0d',
          'text': '#1a1a1a',
          'text-light': '#faf8f5',
          'accent': '#c8a96e',
          'accent-hover': '#b8923e',
          'muted': '#6b6b6b',
        }
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'mega-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'gold': '0 4px 20px rgba(200, 169, 110, 0.15)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c8a96e 0%, #d4b97a 50%, #c8a96e 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)',
        'gradient-warm': 'linear-gradient(180deg, #faf8f5 0%, #f5f0eb 100%)',
      }
    },
  },
  plugins: [],
}
