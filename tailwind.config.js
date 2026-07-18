/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-black': '#1a1a1a',
        'velmora-charcoal': '#2d2d2d',
        'velmora-gold': '#b8956a',
        'velmora-gold-light': '#d4b896',
        'velmora-gold-dark': '#8a6f4e',
        'velmora-cream': '#f5f0eb',
        'velmora-beige': '#e8e0d8',
        'velmora-sand': '#faf6f1',
        'velmora-white': '#fefefe',
        'velmora-text': '#2d2d2d',
        'velmora-text-light': '#6b6b6b',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'premium': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
