/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#1A1512",
          50: "#F7F4F1",
          100: "#EDE6DF",
          200: "#D9CDBF",
          300: "#B8A48F",
          400: "#8C7459",
          500: "#5E4A36",
          600: "#3D2F20",
          700: "#2A2017",
          800: "#1A1512",
          900: "#100C09",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#C9A876",
          dark: "#8A6D3F",
          soft: "#E8D9BE",
        },
        cream: "#FAF6F0",
        sand: "#F0E9DF",
        stone: "#E5DDD1",
        ink: "#2B231D",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
