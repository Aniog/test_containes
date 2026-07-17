/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#211D19',
        espresso: '#2E2823',
        'espresso-deep': '#231F1B',
        cream: '#FAF6EF',
        sand: '#F3EDE1',
        'stone-warm': '#E7DDCA',
        gold: '#B08D57',
        'gold-deep': '#96742F',
        'gold-soft': '#D9C29A',
        bronze: '#8A6A45',
        taupe: '#8B8177',
        'taupe-dark': '#6E655B',
        line: '#E3DACB',
        'line-dark': '#453E36',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -18px rgba(33, 29, 25, 0.22)',
        'soft-lg': '0 30px 70px -24px rgba(33, 29, 25, 0.32)',
        drawer: '-24px 0 60px -30px rgba(33, 29, 25, 0.45)',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
