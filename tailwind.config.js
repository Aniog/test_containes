/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — warm editorial luxury
        cream:    "#FAF7F2",       // page background
        parchment:"#F2EDE4",       // subtle section bg
        espresso: "#1C1814",       // primary dark text / nav bg
        charcoal: "#2E2A26",       // secondary text
        stone:    "#7A7068",       // muted text
        gold:     "#B8924A",       // primary accent
        "gold-light": "#D4AA6A",   // hover / lighter gold
        "gold-pale":  "#EDD9A3",   // very light gold tint
        ivory:    "#FFFDF9",       // card / input bg
        border:   "#E8E0D4",       // hairline dividers
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
}

