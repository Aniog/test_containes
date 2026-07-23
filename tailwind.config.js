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
        velvet:   "#1a1410",   // deep warm near-black (base)
        obsidian: "#2c2520",   // slightly lighter dark
        bark:     "#4a3f35",   // warm dark brown
        driftwood:"#8a7a6e",   // muted warm gray-brown
        parchment:"#f5f0e8",   // warm cream (primary bg)
        linen:    "#ede8df",   // slightly deeper cream
        champagne:"#e8dcc8",   // warm champagne
        gold:     "#c9a96e",   // primary gold accent
        "gold-light": "#dfc08a", // lighter gold hover
        "gold-dark":  "#a8854a", // deeper gold
        ivory:    "#faf7f2",   // near-white warm
      },
      fontFamily: {
        serif:  ["Cormorant Garamond", "Georgia", "serif"],
        sans:   ["Inter", "system-ui", "sans-serif"],
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
