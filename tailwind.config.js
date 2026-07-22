/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury gold jewelry palette
        gold: {
          50: '#F9F7F2',
          100: '#F5F0E1',
          200: '#EAE3C8',
          300: '#D4C49A',
          400: '#B8A56D',
          500: '#A08040', // Primary gold
          600: '#8B6B35',
          700: '#6D4F2A',
          800: '#543D21',
          900: '#3E2E18',
        },
        cream: {
          50: '#FFFEF9',
          100: '#FFFBF0',
          200: '#FFF5E1',
          300: '#FFEEC8',
          400: '#FFE3A8',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#A3A3A3',
          400: '#808080',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        velmora: {
          primary: '#A08040',
          secondary: '#8B6B35',
          accent: '#D4C49A',
          dark: '#1A1A1A',
          light: '#FFFEF9',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.12)',
        'gold': '0 4px 20px -2px rgba(160, 128, 64, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
