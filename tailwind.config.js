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
          base: "#FAF9F6",
          dark: "#1A1A1A",
          muted: "#5C5C5C",
          gold: "#D4AF37",
          "gold-dark": "#B5952F",
          border: "#E5E5E5"
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
