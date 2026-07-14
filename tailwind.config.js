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
        navy: "#1A3C6E",
        "navy-dark": "#15305a",
        "navy-light": "#EBF2FA",
        "brand-red": "#C0392B",
        "brand-red-dark": "#a93226",
        "text-dark": "#1A1A2E",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
