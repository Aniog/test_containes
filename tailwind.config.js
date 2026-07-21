/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E8",
        cream: "#FCF9F3",
        sand: "#EBE2D2",
        ink: "#1E1913",
        espresso: "#2B241C",
        gold: "#A98436",
        "gold-deep": "#8C6D2A",
        "gold-soft": "#C9A961",
        bronze: "#6B5B3E",
        taupe: "#8A7E6B",
        line: "#E2D9C8",
        "line-dark": "#453B2E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
