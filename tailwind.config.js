/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBFAF7',
          100: '#F8F6F2',
          200: '#F0EDE6',
          300: '#E8E4DE',
        },
        charcoal: {
          50: '#F4F4F3',
          100: '#E6E5E3',
          200: '#CFCDC9',
          300: '#AEABA4',
          400: '#86827A',
          500: '#6B6560',
          600: '#524D49',
          700: '#3D3A36',
          800: '#2A2825',
          900: '#1A1917',
          950: '#0F0E0D',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F5F0E3',
          200: '#EADBC2',
          300: '#DEC199',
          400: '#D2A770',
          500: '#C69652',
          600: '#BFA06B',
          700: '#A68A4D',
          800: '#826C3E',
          900: '#5E4E2D',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reel-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'reel-scroll': 'reel-scroll 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
