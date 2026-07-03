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
          cream: '#FAF7F2',
          espresso: '#2C2420',
          gold: '#C4A962',
          'gold-light': '#E8D9B5',
          'warm-gray': '#8A7E74',
          sand: '#E8E2D9',
          charcoal: '#1A1614',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'extra-wide': '0.2em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 36, 32, 0.08)',
        'lift': '0 8px 30px rgba(44, 36, 32, 0.12)',
        'gold': '0 4px 15px rgba(196, 169, 98, 0.25)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
