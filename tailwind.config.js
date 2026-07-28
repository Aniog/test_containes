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
          50:  "#F4F7FB",
          100: "#E6EDF5",
          700: "#143A60",
          800: "#0E2A47",
          900: "#0B1F36",
        },
        accent: {
          100: "#FBE7D4",
          500: "#E68A3D",
          600: "#D9711B",
          700: "#B25A14",
        },
        ink: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          500: "#64748B",
          700: "#334155",
          900: "#0F172A",
        },
        canvas: "#FAF8F4",
        card: "#FFFFFF",
        success: {
          600: "#15803D",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
        cardHover: "0 4px 12px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
}
