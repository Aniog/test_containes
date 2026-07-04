/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-stone': '#3D3733',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#EDE7D9',
        'velmora-sand': '#D4C9B5',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A8854A',
        'velmora-text-dark': '#1A1714',
        'velmora-text-mid': '#5C5248',
        'velmora-text-muted': '#8C7E72',
        'velmora-text-light': '#F5F0E8',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'manrope': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.7s ease-out forwards',
        'slideInRight': 'slideInRight 0.35s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
