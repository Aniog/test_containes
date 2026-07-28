/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E2A47",
          navyDark: "#08203A",
          red: "#C8102E",
          redDark: "#A60D26",
          ink: "#0E1A2B",
          slate: "#56657A",
          surface: "#F4F6F9",
          border: "#E2E7EE",
          success: "#1F8A5A",
          warning: "#C26B00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 26, 43, 0.06), 0 4px 12px rgba(14, 26, 43, 0.04)",
        cardHover: "0 4px 12px rgba(14, 26, 43, 0.08), 0 8px 24px rgba(14, 26, 43, 0.06)",
      },
    },
  },
  plugins: [],
}
