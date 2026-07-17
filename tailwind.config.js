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
          base: "#FDFBF7",
          primary: "#1A1A1A",
          accent: "#BC9C6C",
          muted: "#757575",
          surface: "#F5F2ED",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      }
    },
  },
  plugins: [],
}
