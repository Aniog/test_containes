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
          50: '#FDFBF7',
          100: '#F5F1EA',
          200: '#E8DCC4',
        },
        espresso: {
          800: '#2D2A26',
          900: '#1A1814',
        },
        gold: {
          DEFAULT: '#C9A962',
          hover: '#B8943F',
          light: '#E8DCC4',
        },
        taupe: {
          DEFAULT: '#6B5D4D',
          light: '#9C8B78',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 24, 20, 0.08)',
        'elevated': '0 8px 30px rgba(26, 24, 20, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards',
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
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
