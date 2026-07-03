/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-charcoal': '#1A1A1A',
        'velmora-gold': '#C9A962',
        'velmora-gold-light': '#E8D5A8',
        'velmora-warm-gray': '#8B8680',
        'velmora-light-gray': '#F5F3EF',
        'velmora-border': '#E5E0D8',
        'velmora-success': '#4A7C59',
        'velmora-error': '#A65D57',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 26, 26, 0.08)',
        'soft-lg': '0 8px 30px rgba(26, 26, 26, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
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
      },
    },
  },
  plugins: [],
}
