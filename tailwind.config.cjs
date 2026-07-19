/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1611",
        "ink-soft": "#2b211a",
        paper: "#faf6ef",
        "paper-warm": "#f3ebdc",
        gold: "#b89460",
        "gold-deep": "#8e6f44",
        "gold-soft": "#d9c19a",
        taupe: "#8a7a68",
        mist: "#e9e0d1",
        success: "#4a6b3c",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        product: "0.18em",
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(29, 22, 17, 0.04), 0 4px 16px rgba(29, 22, 17, 0.04)",
        drawer: "-12px 0 40px rgba(29, 22, 17, 0.08)",
      },
    },
  },
  plugins: [],
}
