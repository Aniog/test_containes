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
        'velmora-stone': '#3D3830',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#FAF7F2',
        'velmora-sand': '#E8DFD0',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#DFC08A',
        'velmora-gold-muted': '#A8895A',
        'velmora-text-primary': '#1A1714',
        'velmora-text-secondary': '#5C5248',
        'velmora-text-muted': '#8C7E72',
        'velmora-text-inverse': '#FAF7F2',
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
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.7s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(26,23,20,0.12)',
        'drawer': '-8px 0 40px rgba(26,23,20,0.2)',
        'gold': '0 4px 20px rgba(201,169,110,0.25)',
      },
    },
  },
  plugins: [],
}
