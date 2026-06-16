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
          DEFAULT: "#0E1A2B",
          soft: "#1B2A40",
          muted: "#475569",
        },
        brass: {
          DEFAULT: "#B08D57",
          soft: "#C9A876",
          deep: "#8C6E3E",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          soft: "#FBF8F3",
        },
        surface: "#FFFFFF",
        border: "#E5DDD0",
        muted: "#6B6358",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
