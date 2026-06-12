/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1418",
        graphite: "#1F2A33",
        steel: "#5B6B78",
        mist: "#E7ECEF",
        paper: "#F7F5F0",
        bone: "#FFFFFF",
        ember: {
          DEFAULT: "#B8744A",
          soft: "#E2C4AC",
        },
        gold: "#C9A24A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
