/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F7F4F0',
          white: '#FFFFFF',
          ink: '#1E1A17',
          taupe: '#6D6460',
          stone: '#9E9490',
          accent: '#A86B48',
          'accent-dark': '#8C5639',
          gold: '#CBAF87',
          border: '#E9E2DC',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
