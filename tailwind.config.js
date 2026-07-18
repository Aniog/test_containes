/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F7F3EC",
        sand: "#EFE7DA",
        champagne: "#B08D57",
        "champagne-deep": "#8A6D3F",
        stone: "#6B6258",
        line: "#E2D9CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.18em",
      },
      boxShadow: {
        editorial: "0 18px 40px -24px rgba(26,23,20,0.35)",
      },
    },
  },
  plugins: [],
}
