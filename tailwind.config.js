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
          DEFAULT: "#0E2A47",
          soft: "#1A3A5C",
          deep: "#091E33",
        },
        accent: {
          DEFAULT: "#C2410C",
          soft: "#EA580C",
          muted: "#FED7AA",
        },
        page: "#F7F8FA",
        ink: {
          900: "#0F172A",
          700: "#334155",
          500: "#64748B",
          400: "#94A3B8",
        },
        border: {
          soft: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        "7xl": "80rem",
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
}
