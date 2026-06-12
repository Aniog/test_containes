/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        steel: "#1E6FA5",
        "sky-accent": "#4DA6D9",
        gold: "#C9A84C",
        surface: "#F5F7FA",
        "surface-dark": "#1A2B3C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
