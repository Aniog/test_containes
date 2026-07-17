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
          DEFAULT: '#FDFBF7',
          50: '#FDFBF7',
          100: '#F9F5ED',
          200: '#F0EBE3',
          300: '#E5DED3',
        },
        espresso: {
          DEFAULT: '#1C1816',
          50: '#3D3530',
          100: '#352E2A',
          200: '#2D2723',
          300: '#24201D',
          400: '#1C1816',
          500: '#141110',
        },
        gold: {
          DEFAULT: '#B8944E',
          50: '#F5EDDB',
          100: '#EDDFC0',
          200: '#D9C28E',
          300: '#C9A96E',
          400: '#B8944E',
          500: '#9B7A3C',
          600: '#7D622E',
        },
        warm: {
          DEFAULT: '#8B8580',
          50: '#AFA9A5',
          100: '#9B9590',
          200: '#8B8580',
          300: '#6B6560',
          400: '#4B4540',
        },
        sand: {
          DEFAULT: '#F5F1EB',
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#E8E2D8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        super: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
