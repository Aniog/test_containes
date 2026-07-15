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
          cream: "#F8F5F2",
          sand: "#E8E0D8",
          tan: "#D4C8BA",
          stone: "#8A7E72",
          brown: "#5C534A",
          ink: "#1C1C1C",
          gold: "#C9A96E",
          "gold-dark": "#b8975e",
          divider: "#E2D9CF",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
}
