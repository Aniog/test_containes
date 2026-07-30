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
        accent: "#E8621A",
        lightblue: "#EBF2FA",
        darktext: "#1A1A2E",
        mutedtext: "#5A6A7A",
        bordercolor: "#D1DCE8",
        successgreen: "#2E7D52",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
