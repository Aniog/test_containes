/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1B2B",
          800: "#102538",
          700: "#1A3A55",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
        },
        surface: {
          0: "#FFFFFF",
          50: "#F5F7FA",
          100: "#E8ECF1",
          200: "#D5DCE4",
        },
        accent: {
          50: "#FDECEF",
          100: "#FBD5DC",
          500: "#D72638",
          600: "#C8102E",
          700: "#A40D26",
        },
        success: { 600: "#15803D" },
        warning: { 500: "#D97706" },
        info: { 600: "#1D4ED8" },
        danger: {
          50: "#FDECEF",
          200: "#FBD5DC",
          500: "#D72638",
          600: "#C8102E",
          700: "#A40D26",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1200px",
        wide: "1280px",
        prose: "70ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.02)",
        "card-hover":
          "0 8px 24px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.04)",
        cta: "0 8px 18px rgba(200, 16, 46, 0.22)",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      letterSpacing: {
        eyebrow: "0.08em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
