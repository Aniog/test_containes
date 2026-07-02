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
          bg: '#F7F4EF',
          fg: '#1E1A16',
          muted: '#7C756D',
          border: '#E3DDD4',
          accent: '#A66A3F',
          'accent-hover': '#8B5532',
          gold: '#C9A86A',
          cream: '#FAF8F5',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '9/16': '9 / 16',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
