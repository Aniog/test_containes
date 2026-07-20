/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1A1A1A",
        background: "#F9F7F2",
        accent: {
          DEFAULT: "#C4A484",
          dark: "#8B735B",
        },
        refined: "#2D2D2D",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
