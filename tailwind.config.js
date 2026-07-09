/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        mist: '#F0EBE3',
        gold: '#B8935A',
        'gold-light': '#D4AF7A',
        charcoal: '#1C1917',
        'stone-warm': '#7C7168',
        divider: '#E2D9CF',
        dark: '#0F0D0B',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInFast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease forwards',
        slideInRight: 'slideInRight 0.35s ease forwards',
        fadeInFast: 'fadeInFast 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
