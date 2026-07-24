/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F5F0',
        foreground: '#1C1C1C',
        muted: {
          DEFAULT: '#6D655D',
          foreground: '#6D655D',
        },
        accent: {
          DEFAULT: '#B08D6F',
          dark: '#8C6F52',
          foreground: '#FFFFFF',
        },
        gold: '#C9A96E',
        border: '#E3DDD4',
        'border-dark': '#3A3A3A',
        cream: '#F8F5F0',
        charcoal: '#1C1C1C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
