/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1714",
        ink: "#2A2420",
        ivory: "#F7F3EE",
        cream: "#FBF8F4",
        sand: "#E4DBD0",
        taupe: "#8A7E72",
        gold: {
          DEFAULT: "#B08D57",
          dark: "#947241",
          light: "#C9A876",
        },
        champagne: "#EFE6D6",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.25em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(28, 23, 20, 0.18)",
        card: "0 6px 30px -12px rgba(28, 23, 20, 0.12)",
      },
      transitionDuration: {
        700: "700ms",
      },
    },
  },
  plugins: [],
}
