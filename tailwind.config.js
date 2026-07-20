/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0B0B0B',
        'bg-warm': '#1A1714',
        'bg-ivory': '#F5F0E8',
        'bg-cream': '#FAF7F2',
        'gold': '#C4975B',
        'gold-light': '#D4AD78',
        'gold-muted': '#A07D4F',
        'text-primary': '#F5F0E8',
        'text-secondary': '#B0A898',
        'text-dark': '#1A1714',
        'text-dark-secondary': '#6B6560',
        'border-subtle': 'rgba(196, 151, 91, 0.15)',
        'border-light': 'rgba(245, 240, 232, 0.12)',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-lg': '0.15em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
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
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
