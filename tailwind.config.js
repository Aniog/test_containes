/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal base
        obsidian: "#1a1714",
        "obsidian-light": "#2a2520",
        // Warm cream / ivory
        ivory: "#f5f0e8",
        "ivory-dark": "#ede6d6",
        // Warm gold accent
        gold: "#c9a96e",
        "gold-light": "#dfc08a",
        "gold-dark": "#a8854a",
        // Muted warm taupe
        taupe: "#8c7b6b",
        "taupe-light": "#b5a898",
        // Soft blush for subtle accents
        blush: "#e8d5c4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
}
