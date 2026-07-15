/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1714",
          soft: "#2A2320",
        },
        cream: "#F7F2EC",
        sand: "#EDE4D8",
        champagne: "#E8D9C4",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#9A7544",
          light: "#C9A876",
        },
        stone: {
          DEFAULT: "#7A6F64",
          light: "#A99C8E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        editorial: "88rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
