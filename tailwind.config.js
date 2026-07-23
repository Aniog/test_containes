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
        obsidian: "#1C1917",
        "obsidian-light": "#292524",
        // Warm cream / ivory
        ivory: "#FAF7F2",
        "ivory-dark": "#F0EBE1",
        parchment: "#E8DFD0",
        // Gold accent
        gold: "#C9A96E",
        "gold-light": "#DFC08A",
        "gold-dark": "#A8854A",
        // Muted warm gray
        "warm-gray": "#8C8279",
        "warm-gray-light": "#B5AFA8",
        // Text
        "text-primary": "#1C1917",
        "text-secondary": "#6B6460",
        "text-muted": "#9C9490",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
}
