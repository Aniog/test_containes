/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-stone': '#4A4540',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#FAF7F2',
        'velmora-sand': '#E8DDD0',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#DFC08A',
        'velmora-gold-dark': '#A8854A',
        'velmora-text-primary': '#1A1714',
        'velmora-text-secondary': '#4A4540',
        'velmora-text-muted': '#8A7E74',
        'velmora-text-inverse': '#FAF7F2',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.35s ease-in forwards',
      },
    },
  },
  plugins: [],
}
