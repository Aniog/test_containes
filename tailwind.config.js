/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F6F1E9",
        sand: "#EDE4D6",
        gold: "#B08D57",
        "gold-deep": "#8E6F3E",
        champagne: "#D9C3A1",
        muted: "#7A6F62",
        line: "#D8CDBD",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(26,23,20,0.25)",
        card: "0 18px 50px -28px rgba(26,23,20,0.35)",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
}
