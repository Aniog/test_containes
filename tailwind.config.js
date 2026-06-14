/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1722",
          soft: "#1F2A3A",
        },
        steel: "#3A4756",
        gold: "#B89968",
        goldDeep: "#9C7E4D",
        paper: "#FFFFFF",
        cream: "#F7F5F1",
        hairline: "#E5E1D8",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
}
