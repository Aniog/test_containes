/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          500: "#1e3a5f",
          600: "#16304d",
          700: "#11253a",
          800: "#0c1c2c",
          900: "#08131f",
        },
        accent: {
          400: "#e36b3f",
          500: "#d94f1e",
          600: "#bf3f12",
          700: "#9c3410",
        },
        ink: {
          400: "#94a3b8",
          500: "#64748b",
          700: "#334155",
          900: "#0f1722",
        },
        surface: {
          50: "#f8fafc",
          100: "#eef2f7",
        },
        line: "#e2e8f0",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,34,0.04), 0 1px 3px rgba(15,23,34,0.06)",
      },
    },
  },
  plugins: [],
};
