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
          ivory: "#f7f1e8",
          pearl: "#efe4d3",
          ink: "#1d1916",
          mocha: "#5f554c",
          line: "#d8c7b0",
          gold: "#b8955e",
          goldSoft: "#d3b27a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        velmora: "0 24px 60px rgba(29, 25, 22, 0.12)",
        card: "0 18px 40px rgba(29, 25, 22, 0.08)",
      },
      letterSpacing: {
        luxe: "0.25em",
      },
    },
  },
  plugins: [],
}
