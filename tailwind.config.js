/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FAF7F2',
        'cream-dark': '#F0EBE1',
        'deep-base': '#1A1612',
        'deep-base-light': '#2A2420',
        'gold-accent': '#C9A96E',
        'gold-light': '#E8D5A8',
        'gold-dark': '#A8874F',
        'warm-gray': '#6B6358',
        'warm-border': '#E8E0D4',
        'warm-text': '#1A1612',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'nav': '0.15em',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26, 22, 18, 0.06)',
        'card-hover': '0 8px 30px rgba(26, 22, 18, 0.12)',
        'drawer': '-4px 0 30px rgba(26, 22, 18, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
