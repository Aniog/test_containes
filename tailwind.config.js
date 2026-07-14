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
          'black': '#1a1a1a',
          'charcoal': '#2d2d2d',
          'dark': '#3a3a3a',
          'slate': '#6b6b6b',
          'silver': '#9a9a9a',
          'warm-gray': '#b8b0a6',
          'cream': '#faf8f5',
          'linen': '#f5f0ea',
          'ivory': '#ede7df',
          'gold': '#c9a96e',
          'gold-light': '#dbbf8a',
          'gold-dark': '#a88b52',
          'rose': '#d4a5a5',
          'blush': '#e8d5d0',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
        'widest-3xl': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
