/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          cream: '#F7F5F0',
          ivory: '#FAF9F6',
          espresso: '#1A1714',
          warmgray: '#6B6560',
          gold: '#C9A96E',
          golddark: '#B8945A',
          muted: '#E8E4DE',
          border: '#D5CFC6',
          surface: '#FFFFFF',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
  plugins: [],
}
