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
          50: '#FDFCF9',
          100: '#F7F3EE',
          200: '#EDE6DD',
          300: '#E0D6C8',
        },
        espresso: {
          900: '#1A1614',
          800: '#2A2420',
          700: '#3D3530',
        },
        gold: {
          DEFAULT: '#B8926A',
          light: '#D4B896',
          dark: '#8F6E4B',
        },
        warmgray: {
          50: '#F9F8F6',
          100: '#EFEDEA',
          200: '#D9D4CE',
          300: '#B0A9A1',
          400: '#8C8279',
          500: '#6B6259',
          600: '#4A443E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
