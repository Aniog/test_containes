/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        'velmora': {
          cream: '#FAF8F5',
          sand: '#E8E0D4',
          gold: '#C9A96E',
          'gold-light': '#D4B87A',
          'gold-dark': '#A6884F',
          charcoal: '#2C2C2C',
          'charcoal-light': '#3D3D3D',
          ivory: '#FAFAF7',
          stone: '#9A9590',
        }
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
