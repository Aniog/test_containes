/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, warm base palette
        cream: '#FAF7F2',
        'cream-dark': '#F0EBE3',
        parchment: '#E8E0D4',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2D2D2D',
        'warm-gray': '#6B6560',
        'warm-gray-light': '#9A948E',
        'warm-gray-lighter': '#C8C2BA',
        // Gold metallic accent
        gold: '#B8956A',
        'gold-light': '#D4B896',
        'gold-dark': '#8B6F4E',
        'gold-muted': '#C9AC85',
        // Functional
        success: '#5A7A5A',
        error: '#A14040',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'overline': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(0,0,0,0.06)',
        'medium': '0 4px 24px rgba(0,0,0,0.08)',
        'elevated': '0 8px 40px rgba(0,0,0,0.12)',
        'gold': '0 4px 20px rgba(184,149,106,0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
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
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-out-right': 'slide-out-right 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'scale-in': 'scale-in 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
}
