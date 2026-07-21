/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        ink: '#2A2420',
        gold: '#B08D57',
        'gold-soft': '#C9A876',
        ivory: '#F7F3EE',
        cream: '#EFE8DF',
        sand: '#8A7E72',
        line: '#E2D9CE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.14em',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(28,23,20,0.25)',
        card: '0 18px 50px -28px rgba(28,23,20,0.35)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-in': 'slideIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
