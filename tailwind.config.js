/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1A3C6E",
        "navy-dark": "#122B52",
        "navy-light": "#2A5298",
        "china-red": "#C0392B",
        "china-red-dark": "#A93226",
        gold: "#D4A017",
        "light-blue": "#EBF2FA",
        "text-dark": "#1A1A2E",
        "text-muted": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
