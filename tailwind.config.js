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
          50: "#f7f5f1",
          100: "#ece7df",
          200: "#d9cfbf",
          300: "#bfae93",
          400: "#9c8462",
          500: "#7a6346",
          600: "#5e4d36",
          700: "#433829",
          800: "#2b2419",
          900: "#1a1610",
          950: "#100d08",
        },
        gold: {
          50: "#fbf7ee",
          100: "#f4ead0",
          200: "#e9d29c",
          300: "#dcb567",
          400: "#cf9d3f",
          500: "#bd8427",
          600: "#a06a1f",
          700: "#7e4f1d",
          800: "#5f3d1c",
          900: "#4a301a",
        },
        cream: "#f7f3ec",
        ink: "#1a1610",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
