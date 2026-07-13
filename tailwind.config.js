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
        'velmora-cream': '#EDE8DE',
        'velmora-sand': '#D4C9B5',
        'velmora-mist': '#8C8278',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A8854A',
        'velmora-ink': '#1A1714',
        'velmora-ivory': '#F5F0E8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawerIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.6s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        drawerIn: 'drawerIn 0.35s ease-out forwards',
      },
      boxShadow: {
        'gold': '0 8px 40px rgba(201,169,110,0.12)',
        'gold-lg': '0 16px 60px rgba(201,169,110,0.18)',
        'drawer': '-8px 0 40px rgba(26,23,20,0.3)',
      },
    },
  },
  plugins: [],
}
