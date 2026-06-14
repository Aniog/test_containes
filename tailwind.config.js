/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A44",
          700: "#163A60",
          800: "#0B2138",
        },
        brand: {
          DEFAULT: "#E36A2C",
          600: "#C95A20",
          50: "#FCEFE6",
          100: "#F8DCC4",
        },
        steel: "#4A5A6B",
        muted: "#F4F6F8",
        border: "#E2E6EB",
        ink: {
          DEFAULT: "#0F1A26",
          soft: "#4A5A6B",
        },
        success: "#1F8A55",
        warning: "#B07A1A",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      maxWidth: {
        "7xl": "80rem",
        "3xl": "48rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 26, 38, 0.04), 0 1px 3px rgba(15, 26, 38, 0.06)",
      },
    },
  },
  plugins: [],
}
