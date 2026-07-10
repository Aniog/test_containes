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
          950: "#15110D",
          900: "#1F1812",
          800: "#2A2118",
          700: "#3A2E22",
        },
        sand: {
          50: "#FBF7F1",
          100: "#F4ECDF",
          200: "#E9DCC6",
          300: "#D6C2A0",
        },
        champagne: {
          300: "#E2CBA2",
          500: "#C9A875",
          600: "#B08E55",
        },
        bone: "#FFFFFF",
        textink: "#2A2118",
        textmute: "#6B5A48",
        textondark: "#F4ECDF",
        textmuteondark: "#B5A48C",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
        wider1: "0.18em",
      },
      spacing: {
        content: "1280px",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
