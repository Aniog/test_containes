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
          bg: "#F8F6F3",
          cream: "#F5F0EB",
          sand: "#E8E0D8",
          gold: "#C9A96E",
          "gold-light": "#D4BC8A",
          "gold-dark": "#A88B4E",
          ebony: "#1A1614",
          graphite: "#2D2826",
          pewter: "#6B6560",
          stone: "#9E948A",
          "warm-white": "#FAF8F6",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.08em",
        wider: "0.15em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
}
