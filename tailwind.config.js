/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f7f5f2',
          surface: '#ffffff',
          ink: '#1a1a1a',
          muted: '#6b6b6b',
          subtle: '#9a9a9a',
          line: '#e6e2dc',
          accent: '#c9a96e',
          accentHover: '#b8944f',
          warm: '#f3efe8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.18em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        glow: '0 20px 60px rgba(201,169,110,0.18)',
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
