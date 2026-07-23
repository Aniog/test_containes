/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "velmora-ink": "#1e1716",
        "velmora-espresso": "#2c221f",
        "velmora-aubergine": "#4a3940",
        "velmora-champagne": "#b79a64",
        "velmora-sand": "#d8c7b3",
        "velmora-mist": "#ede4db",
        "velmora-ivory": "#fbf8f3",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        velmora: "0 20px 60px rgba(30, 23, 22, 0.08)",
        soft: "0 12px 32px rgba(30, 23, 22, 0.06)",
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      backgroundImage: {
        "velmora-fade": "linear-gradient(180deg, rgba(30, 23, 22, 0.1), rgba(30, 23, 22, 0.72))",
      },
    },
  },
  plugins: [],
}
