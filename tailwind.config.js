/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#f7f4ef',
          'cream-dark': '#efe9e1',
          stone: '#e8e2d9',
          charcoal: '#1c1917',
          'charcoal-soft': '#2a2624',
          gold: '#bfa06b',
          'gold-light': '#d4b87a',
          'gold-dark': '#9a7d52',
          taupe: '#a89f94',
          'warm-gray': '#6b6560',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
