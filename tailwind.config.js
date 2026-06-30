/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Warm Noir
        cream: '#FAF9F7',
        surface: '#FFFFFF',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6B6B',
        'muted-gray': '#9A9A9A',
        
        // Gold Accents
        gold: {
          DEFAULT: '#B8956B',
          light: '#D4B896',
          dark: '#8B7355',
          hover: '#C9A87C',
        },
        
        // Supporting
        border: '#E8E6E3',
        divider: '#F0EEEB',
        overlay: 'rgba(26, 26, 26, 0.6)',
        success: '#7A9A7A',
        error: '#C47A7A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2' }],
        'card-title': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.1em' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1400px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'soft': '4px',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'shimmer': 'shimmer 1.5s infinite',
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
