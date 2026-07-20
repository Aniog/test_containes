/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          gold: "#D4AF37",
          "gold-light": "#E5C158",
          charcoal: "#1A1A1A",
          stone: "#2C2C2C",
          warm: "#FDFBF7",
          taupe: "#8C7E74",
          cream: "#F5F2ED",
        },
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#FDFBF7",
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      }
    },
  },
  plugins: [],
}
