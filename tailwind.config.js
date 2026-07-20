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
          espresso: "#211915",
          ink: "#342820",
          parchment: "#F7F0E7",
          ivory: "#FFFBF5",
          linen: "#E9DCCB",
          champagne: "#C9A46A",
          rose: "#B98972",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        jewel: "0 24px 80px rgba(33, 25, 21, 0.12)",
        soft: "0 12px 40px rgba(33, 25, 21, 0.08)",
      },
    },
  },
  plugins: [],
}
