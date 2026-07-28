/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2A44",
          700: "#0A1E33",
          100: "#E6ECF2",
        },
        accent: {
          DEFAULT: "#C2410C",
          100: "#FDE9DC",
        },
        ink: "#0B1320",
        muted: "#5B6675",
        line: "#E2E6EC",
        surface: "#FFFFFF",
        bg: "#F7F8FA",
        success: "#15803D",
        warn: "#B45309",
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
        content: "1200px",
        prose: "70ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,19,32,0.04), 0 4px 12px rgba(11,19,32,0.04)",
        "card-hover": "0 4px 8px rgba(11,19,32,0.06), 0 12px 24px rgba(11,19,32,0.08)",
      },
    },
  },
  plugins: [],
}
