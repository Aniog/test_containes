/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          black: '#1A1A1A',
          dark: '#2A2520',
          charcoal: '#3D3631',
          brown: '#5C524A',
          muted: '#7A7267',
          warm: '#A09484',
          border: '#E8E0D6',
          cream: '#FAF7F2',
          ivory: '#FFFDF9',
          gold: '#C9A96E',
          'gold-light': '#E8D5B5',
          'gold-dark': '#A68B4B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
      },
    },
  },
  plugins: [],
}
