/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F8F4ED",
          soft: "#FBF8F2",
          deep: "#EFE8DA",
        },
        espresso: {
          DEFAULT: "#1F1812",
          soft: "#2A1F18",
          deep: "#15100B",
        },
        bronze: {
          DEFAULT: "#B08855",
          light: "#C8A578",
          deep: "#8A6A40",
        },
        muted: "#7A6A5D",
        hairline: "#E4DACA",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        product: "0.15em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
