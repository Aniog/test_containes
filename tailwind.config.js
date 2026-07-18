/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        paper: '#FFFFFF',
        ink: '#1E1C1A',
        'ink-muted': '#6B6560',
        'ink-subtle': '#A39E98',
        gold: '#C5A059',
        'gold-dark': '#A8843D',
        'gold-soft': '#F2E9D6',
        hairline: '#E3DDD4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.16em',
        wider: '0.12em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        slideInRight: 'slideInRight 0.35s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
      },
    },
  },
  plugins: [],
}
