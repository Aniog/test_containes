/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          cream: "#FCF9F5",
          charcoal: "#1C1C1C",
          gold: "#D4AF37",
          espresso: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
}
