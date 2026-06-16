/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F0E6",
          soft: "#FAF7F1",
        },
        ink: {
          DEFAULT: "#0E1A2B",
          soft: "#1B2A40",
        },
        slate: {
          DEFAULT: "#4A5567",
        },
        muted: {
          DEFAULT: "#8A93A0",
        },
        brass: {
          DEFAULT: "#B89968",
          deep: "#8A6E40",
        },
        line: {
          DEFAULT: "#E2DCCD",
          dark: "#2A3A52",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
        cta: "0.18em",
      },
    },
  },
  plugins: [],
}
