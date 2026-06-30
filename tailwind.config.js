/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, elegant palette for gold jewelry
        'velmora-black': '#1a1a1a',
        'velmora-charcoal': '#2d2d2d',
        'velmora-gold': '#c9a96e',
        'velmora-gold-light': '#d4b87a',
        'velmora-gold-dark': '#b8945a',
        'velmora-cream': '#faf8f5',
        'velmora-beige': '#f5f0e8',
        'velmora-brown': '#8b7355',
        'velmora-white': '#ffffff',
        'velmora-gray-100': '#f7f7f7',
        'velmora-gray-200': '#e8e8e8',
        'velmora-gray-300': '#d0d0d0',
        'velmora-gray-400': '#a0a0a0',
        'velmora-gray-500': '#707070',
        'velmora-gray-600': '#505050',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'premium': '300ms',
      },
    },
  },
  plugins: [],
}
