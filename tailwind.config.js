/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        ivory: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FAF3E8',
          300: '#F5EAD8',
          400: '#EEDCC2',
          500: '#E0C9A5',
          600: '#C4A87A',
          700: '#A88A5A',
          800: '#8A6E42',
          900: '#6B5632',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5A5A5A',
          700: '#454545',
          800: '#2D2D2D',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FFF0C2',
          300: '#FFE499',
          400: '#FFD466',
          500: '#D4A853',
          600: '#B8923D',
          700: '#9A7A30',
          800: '#7D6225',
          900: '#604B1B',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FFF9EB',
          300: '#FFF3D6',
          400: '#FFEBC2',
          500: '#FFE0A8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'heading-3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'heading-4': ['1.25rem', { lineHeight: '1.35', letterSpacing: '0.005em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'overline': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 25px -5px rgba(0, 0, 0, 0.08)',
        'elevated': '0 12px 40px -10px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px rgba(212, 168, 83, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
