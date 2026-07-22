/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6F0",
        cream: "#F3EDE3",
        sand: "#E7DCC9",
        ink: "#1C1917",
        espresso: "#44382E",
        taupe: "#8A7B68",
        gold: "#B08D4C",
        "gold-dark": "#96773B",
        "gold-light": "#D9C08F",
        forest: "#23201B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.25em",
        wide2: "0.18em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
