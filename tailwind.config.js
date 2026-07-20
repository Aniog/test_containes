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
        obsidian: "#1C1A18",
        "obsidian-light": "#2A2724",
        // Warm cream / ivory
        ivory: "#F5F0E8",
        "ivory-dark": "#EDE6D6",
        // Warm gold accent
        gold: "#C9A96E",
        "gold-light": "#DFC08A",
        "gold-dark": "#A8854A",
        // Muted warm taupe
        taupe: "#8C7B6B",
        "taupe-light": "#B5A898",
        // Soft blush for accents
        blush: "#E8D5C4",
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
