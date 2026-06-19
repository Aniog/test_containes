/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        charcoal: '#1C1C1C',
        'warm-gray': '#7A756A',
        gold: '#C9A96E',
        'gold-hover': '#B8944F',
        'warm-light': '#F5F0E6',
        divider: '#E5DFD3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-md': ['2rem', { lineHeight: '1.2' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}
