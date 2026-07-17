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
          bg: '#F7F5F2',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          divider: '#E7E5E4',
          accent: '#B45309',
          accentHover: '#92400E',
          warm: '#F5F0EB',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(28, 25, 23, 0.08)',
        glow: '0 0 0 1px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
