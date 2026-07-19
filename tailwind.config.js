/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EC",
        cream: "#EFE8DC",
        sand: "#E2D6C2",
        espresso: "#1F1A15",
        cocoa: "#3A322A",
        taupe: "#8A7E6E",
        gold: "#B08A4F",
        "gold-deep": "#8C6A36",
        "gold-soft": "#D9BE8E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.18em",
      },
      boxShadow: {
        editorial: "0 18px 40px -20px rgba(31,26,21,0.35)",
        soft: "0 10px 30px -18px rgba(31,26,21,0.25)",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
}
