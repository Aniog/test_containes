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
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          line: '#E7E5E4',
          accent: '#B45309',
          accentHover: '#92400E',
          warm: '#F5F0E8',
          gold: '#C9A96E',
          goldLight: '#E5D5B8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.18em',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(28,25,23,0.08)',
        glow: '0 20px 50px -16px rgba(180,83,9,0.18)',
      },
      animation: {
        fadeIn: 'fadeIn .6s ease-out forwards',
        slideUp: 'slideUp .7s ease-out forwards',
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
