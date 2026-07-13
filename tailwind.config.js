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
          50:  "#F3F6FB",
          100: "#E6EDF7",
          200: "#C7D5E8",
          300: "#9DB2D0",
          400: "#6A85AE",
          500: "#3F5C8A",
          600: "#22426F",
          700: "#163A66",
          800: "#0E2A47",
          900: "#0B1F3A",
        },
        accent: {
          50:  "#FCEEEF",
          100: "#F7D6D8",
          400: "#E25B53",
          500: "#D9342B",
          600: "#C8102E",
          700: "#9E0A23",
        },
        success: {
          600: "#15803D",
          50:  "#F0FDF4",
        },
        warning: {
          600: "#B45309",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
        elevated: "0 4px 6px rgba(15, 23, 42, 0.05), 0 10px 15px rgba(15, 23, 42, 0.05)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
