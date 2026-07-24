/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14110F",
        "ink-soft": "#2A2421",
        paper: "#F7F2EA",
        "paper-2": "#EFE7DA",
        bone: "#FAF6EF",
        gold: "#B8935A",
        "gold-deep": "#8E6E3C",
        champagne: "#D9C29A",
        text: "#14110F",
        "text-muted": "#6B5D4F",
        line: "#1F1B17",
        "line-light": "#E2D8C7",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        "widest-2": "0.18em",
        "widest-3": "0.22em",
        "widest-4": "0.32em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
