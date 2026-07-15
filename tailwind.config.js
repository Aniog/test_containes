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
        parchment: "#F2EDE4",
        linen: "#E8E0D0",
        gold: {
          DEFAULT: "#C9A96E",
          dark: "#A8854A",
          light: "#E8D5B0",
        },
        espresso: "#1C1917",
        umber: "#5C4A32",
        "stone-warm": "#8B7B6B",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.3em",
      },
      transitionDuration: {
        400: "400ms",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
}
