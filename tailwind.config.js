/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep refined base — warm espresso/charcoal
        ink: {
          50: "#f6f4f1",
          100: "#ece7e0",
          200: "#d9d0c4",
          300: "#b8a994",
          400: "#8a7a64",
          500: "#5f5343",
          600: "#3f372c",
          700: "#2a241c",
          800: "#1c1812",
          900: "#13100b",
        },
        // Warm metallic gold accent
        gold: {
          50: "#fbf6ec",
          100: "#f5ead0",
          200: "#ecd6a3",
          300: "#e0bd6f",
          400: "#d4a843",
          500: "#c08f2a", // primary accent
          600: "#a3741f",
          700: "#7e5818",
          800: "#5a3f12",
          900: "#3d2b0d",
        },
        // Soft neutral editorial cream
        cream: {
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f3ede3",
          300: "#e9e0d2",
          400: "#d8ccb8",
        },
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
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
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
