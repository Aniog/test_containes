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
          DEFAULT: "#1c1714",
          50: "#f7f4f1",
          100: "#ece4dc",
          200: "#d8c8b8",
          300: "#b89a7e",
          400: "#8a6a4f",
          500: "#5e4632",
          600: "#3f2e20",
          700: "#2c2018",
          800: "#1c1714",
          900: "#120e0b",
        },
        gold: {
          DEFAULT: "#b08d57",
          light: "#c9a877",
          dark: "#8a6d3f",
          soft: "#d9c4a3",
        },
        cream: {
          DEFAULT: "#f7f3ee",
          warm: "#f1ebe1",
          deep: "#e8dfd1",
        },
        ink: "#2a2420",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      maxWidth: {
        editorial: '1400px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-in-right': 'slideInRight 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
