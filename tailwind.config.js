/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c1714",
          50: "#f7f4f1",
          100: "#ece5dd",
          200: "#d8cabd",
          300: "#b9a48f",
          400: "#8c7560",
          500: "#5e4d3f",
          600: "#3d3127",
          700: "#2a211b",
          800: "#1c1714",
          900: "#120e0b",
        },
        gold: {
          DEFAULT: "#b08d57",
          light: "#c9a877",
          dark: "#8a6d3f",
          soft: "#e8d9bf",
        },
        cream: "#f7f4f1",
        sand: "#efe7dc",
        blush: "#f3e9e0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'slide-in': 'slide-in 0.4s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
