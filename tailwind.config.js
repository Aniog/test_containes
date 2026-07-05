/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-gold': '#C9A96E',
        'velmora-gold-hover': '#B8944F',
        'velmora-charcoal': '#1C1917',
        'velmora-muted': '#78716C',
        'velmora-divider': '#E7E5E4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.1em',
        'wider-product': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.7s ease-out 0.15s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.7s ease-out 0.3s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.7s ease-out 0.45s forwards',
        'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-out-right': 'slideOutRight 0.25s ease-in forwards',
        'overlay-fade-in': 'overlayFadeIn 0.3s ease-out forwards',
        'overlay-fade-out': 'overlayFadeOut 0.25s ease-in forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        overlayFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        overlayFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
