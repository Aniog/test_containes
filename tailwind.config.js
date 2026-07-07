/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary warm gold palette
        gold: {
          50: '#fdf9f0',
          100: '#f9f0d9',
          200: '#f2deb0',
          300: '#e8c67a',
          400: '#d4a84e',
          500: '#c4943a',
          600: '#a67528',
          700: '#8a5c22',
          800: '#724a22',
          900: '#5f3d20',
          950: '#362010',
        },
        // Deep warm backgrounds
        charcoal: {
          DEFAULT: '#1a1714',
          light: '#2a2520',
          medium: '#3a3530',
          border: '#4a4540',
        },
        // Cream/ivory for light sections
        ivory: {
          DEFAULT: '#faf7f2',
          warm: '#f5f0e8',
          dark: '#e8e0d4',
        },
        // Accent copper/rose gold
        copper: {
          DEFAULT: '#b87333',
          light: '#d4935a',
          dark: '#8a5420',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'site': '1440px',
        'content': '1200px',
      },
      borderRadius: {
        'pill': '9999px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
