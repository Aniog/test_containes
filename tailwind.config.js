/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1917",
        parchment: "#FAF7F2",
        sand: "#F0EBE3",
        gold: "#C6A962",
        "gold-hover": "#B89A4F",
        "warm-gray": "#8A8279",
        slate: "#4A4540",
        cream: "#E8E0D4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "product": "0.15em",
        "wide-heading": "0.08em",
      },
      maxWidth: {
        "site": "1280px",
      },
      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
      },
    },
  },
  plugins: [],
}
