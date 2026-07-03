/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - warm, editorial
        'velmora-cream': '#FAF8F5',
        'velmora-ivory': '#F5F2ED',
        'velmora-warm-white': '#FDFCFA',
        
        // Base - deep refined
        'velmora-charcoal': '#1A1A1A',
        'velmora-dark': '#2D2D2D',
        'velmora-graphite': '#3D3D3D',
        
        // Accent - warm gold
        'velmora-gold': '#C9A962',
        'velmora-gold-light': '#D4BC7D',
        'velmora-gold-dark': '#B8954F',
        'velmora-champagne': '#E8DCC4',
        
        // Neutral
        'velmora-stone': '#8B8B8B',
        'velmora-silver': '#C4C4C4',
        'velmora-mist': '#E8E8E8',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading': ['2.5rem', { lineHeight: '1.2' }],
        'heading-sm': ['1.75rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px rgba(201, 169, 98, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
