/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'cream': '#FAF9F7',
          'beige': '#F5F3EF',
          'charcoal': '#1A1918',
          'gold': '#C9A962',
          'gold-hover': '#B8954F',
          'border': '#E5E2DC',
          'gray': '#6B6560',
          'success': '#4A7C59',
          'error': '#A65D57',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 25, 24, 0.08)',
        'hover': '0 8px 30px rgba(26, 25, 24, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
