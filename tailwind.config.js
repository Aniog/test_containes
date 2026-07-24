/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1714",
        espresso: "#2A2320",
        ivory: "#F7F2EA",
        cream: "#FBF8F2",
        sand: "#E8DECF",
        gold: {
          DEFAULT: "#B08A4F",
          deep: "#8E6B33",
          light: "#C9A86A",
        },
        stone: {
          DEFAULT: "#6B6258",
          light: "#9A9085",
        },
        charcoal: "#2A2320",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        wide2: "0.18em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(28,23,20,0.06)",
        card: "0 12px 40px rgba(28,23,20,0.08)",
      },
    },
  },
  plugins: [],
}
