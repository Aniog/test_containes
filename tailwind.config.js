/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1614',
        'velmora-charcoal': '#2C2420',
        'velmora-stone': '#3D3530',
        'velmora-cream': '#FAF7F2',
        'velmora-linen': '#F2EDE4',
        'velmora-sand': '#E8DFD0',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#DFC08A',
        'velmora-gold-muted': '#A8895A',
        'velmora-text-dark': '#1A1614',
        'velmora-text-mid': '#5C4F45',
        'velmora-text-light': '#FAF7F2',
        'velmora-text-muted': '#9C8B7E',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
        'widest-md': '0.12em',
        'widest-sm': '0.08em',
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
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
