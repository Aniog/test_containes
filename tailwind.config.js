/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F7F5F2',
        surface: '#FAF8F5',
        ink: '#1C1917',
        muted: '#78716C',
        gold: '#C5A059',
        'gold-hover': '#A8863F',
        border: '#E7E5E4',
        success: '#4A7C59',
        danger: '#B91C1C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(28,25,23,0.06)',
        lift: '0 20px 40px rgba(28,25,23,0.10)',
      },
      animation: {
        'fade-in': 'fadeIn .6s ease-out forwards',
        'slide-up': 'slideUp .7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
