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
          dark: "#08203A",
          light: "#1A3C5E",
        },
        accent: {
          DEFAULT: "#E25822",
          dark: "#C24A1A",
          light: "#F07A45",
        },
        steel: "#F4F6F8",
        ink: "#1A2330",
        muted: "#5A6573",
        hairline: "#E2E6EC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 42, 71, 0.04), 0 4px 12px rgba(14, 42, 71, 0.05)",
        cardHover: "0 4px 12px rgba(14, 42, 71, 0.08), 0 12px 28px rgba(14, 42, 71, 0.08)",
      },
    },
  },
  plugins: [],
}
