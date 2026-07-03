/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        base: "#0E0D0B",
        surface: "#15120F",
        elevated: "#1C1814",
        input: "#1A1612",
        // Ink (text)
        ink: {
          DEFAULT: "#F5EFE6",
          primary: "#F5EFE6",
          secondary: "#B5AB9C",
          muted: "#8A7E6F",
          onAccent: "#15120F",
        },
        // Brand accent
        accent: {
          DEFAULT: "#C9A876",
          light: "#DCBE93",
          deep: "#A88858",
          soft: "#2A2218",
        },
        // Borders
        line: {
          DEFAULT: "#2A2520",
          strong: "#3A332C",
        },
        // Status
        clay: "#C96B5C",
        sage: "#6E8B6A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        name: "0.18em",
        wider2: "0.14em",
      },
      maxWidth: {
        site: "1440px",
        prose: "62ch",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(0,0,0,0.6)",
        ring: "0 0 0 1px rgba(201,168,118,0.45)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
