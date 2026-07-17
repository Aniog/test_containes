/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#1A1815',
        espresso: '#2D2825',
        mocha: '#4A4039',
        champagne: '#C9A962',
        'gold-light': '#D4BA7A',
        ivory: '#FAF8F5',
        cream: '#F5F1EB',
        linen: '#E8E2D9',
        taupe: '#9C9183',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'section': ['3rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'subsection': ['2rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'product': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(26, 24, 21, 0.05)',
        'card-hover': '0 4px 12px rgba(26, 24, 21, 0.08)',
        'button': '0 4px 12px rgba(201, 169, 98, 0.3)',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-down': 'slideDown 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
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
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
