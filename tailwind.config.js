/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-base': '#1c1917',
        'velmora-surface': '#faf9f7',
        'velmora-paper': '#f2f0eb',
        'velmora-muted': '#a8a29e',
        'velmora-accent': '#bfa15f',
        'velmora-accent-dark': '#9a7e44',
        'velmora-text': '#1c1917',
        'velmora-text-secondary': '#78716c',
        'velmora-hairline': 'rgba(28, 25, 23, 0.12)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
