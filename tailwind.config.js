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
          DEFAULT: "#1A1410",
          soft: "#3A2E25",
        },
        cream: "#F4ECE0",
        ivory: "#FAF6EF",
        gold: {
          DEFAULT: "#C9A875",
          deep: "#A88756",
          soft: "#E8D5B0",
        },
        muted: "#8A7A6B",
        line: {
          DEFAULT: "#E2D7C7",
          dark: "#3A2E25",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "wider-3": "0.22em",
        "wider-4": "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(26,20,16,0.04)",
        drawer: "-12px 0 40px rgba(26,20,16,0.18)",
      },
    },
  },
  plugins: [],
}
