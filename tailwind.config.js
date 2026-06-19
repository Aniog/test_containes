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
          100: '#FAF7F2',
          200: '#F5F0E6',
          300: '#EDE4D4',
          400: '#E0D3BC',
          500: '#D4C4A4',
          600: '#C9B48C',
        },
        gold: {
          50: '#FDF8ED',
          100: '#F9ECCC',
          200: '#F2D999',
          300: '#E8C066',
          400: '#D9A840',
          500: '#C9A84C',
          600: '#B8913A',
          700: '#9A752E',
          800: '#7D5F28',
          900: '#664E24',
        },
        ink: {
          50: '#F6F5F3',
          100: '#E8E3DA',
          200: '#D1C9B9',
          300: '#B4A992',
          400: '#9B8D72',
          500: '#857457',
          600: '#6E5E47',
          700: '#5A4C3A',
          800: '#4A3E30',
          900: '#1A1A1A',
        },
        warm: {
          50: '#FDFBF9',
          100: '#F9F4EC',
          200: '#F0E6D6',
          300: '#E5D5BC',
          400: '#D8C09E',
          500: '#C9A880',
          600: '#B89164',
          700: '#9A784F',
          800: '#7D6142',
          900: '#5C4732',
        },
        blush: {
          50: '#FDF8F6',
          100: '#F9EDE8',
          200: '#F3DACF',
          300: '#EBC0AD',
          400: '#E1A088',
          500: '#D6846A',
          600: '#C46953',
          700: '#A35343',
          800: '#84443A',
          900: '#6C3A33',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
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
