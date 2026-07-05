/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-secondary": "#1a1a1a",
        border: "#2a2a2a",
        primary: "#f5f0eb",
        secondary: "#a09890",
        accent: "#c9a96e",
        "accent-hover": "#d4b87a",
        white: "#ffffff",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.08em",
        wider: "0.12em",
      },
      maxWidth: {
        "page": "1280px",
      },
      transitionDuration: {
        "300": "300ms",
      },
    },
  },
  plugins: [],
}
