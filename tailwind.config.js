/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        surface: "#FFFFFF",
        ink: "#1C1A17",
        gold: "#BFA15A",
        "gold-dark": "#9A7E3F",
        "gold-light": "#F2E8D5",
        muted: "#8C8276",
        hairline: "#E8E0D5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
