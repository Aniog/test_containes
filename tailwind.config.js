/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        "ivory-dark": "#F2EDE4",
        espresso: "#1C1410",
        "espresso-light": "#3D2B1F",
        gold: "#C9A96E",
        "gold-light": "#E2C98A",
        "gold-dark": "#A8854A",
        stone: "#8C7B6B",
        "stone-light": "#BFB0A0",
        charcoal: "#2C2420",
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
