/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        espresso: "#1C1410",
        charcoal: "#2E2520",
        gold: "#C9A96E",
        "gold-light": "#E8D5B0",
        "gold-dark": "#A07840",
        "warm-gray": "#8B7D6B",
        "warm-gray-light": "#D4C9BC",
        "warm-gray-pale": "#F0EBE3",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
}
