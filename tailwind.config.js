/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A3C6E",
        accent: "#C0392B",
        gold: "#D4A017",
        lightblue: "#EBF2FA",
        darktext: "#1A1A2E",
        mutedtext: "#5A6A7A",
        border: "#D8E4F0",
        success: "#27AE60",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
