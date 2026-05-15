/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E7",
        butter: "#F5C842",
        "butter-dark": "#D4A017",
        brown: "#8B5E3C",
        "brown-dark": "#3D2B1F",
        parchment: "#FAF3E0",
        sage: "#7A9E7E",
        "sage-dark": "#5A7A5E",
        "warm-gray": "#6B6560",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
