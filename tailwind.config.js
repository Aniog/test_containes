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
          DEFAULT: "#0E2A47",
          foreground: "#FFFFFF",
          50: "#F0F4F8",
          100: "#DCE4ED",
          200: "#B5C4D4",
          300: "#7E96AE",
          400: "#4F6A85",
          500: "#2A4868",
          600: "#0E2A47",
          700: "#0B2240",
          800: "#081A33",
          900: "#051122",
        },
        accent: {
          DEFAULT: "#E8742A",
          foreground: "#FFFFFF",
          50: "#FDF3EC",
          100: "#FAE2D0",
          200: "#F4C29C",
          300: "#EEA268",
          400: "#E8742A",
          500: "#D45F18",
          600: "#A84810",
          700: "#7C3509",
        },
        ink: "#0B1220",
        surface: "#FFFFFF",
        muted: {
          DEFAULT: "#F4F6F9",
          foreground: "#4B5563",
        },
        border: "#E3E7EE",
        success: "#1F7A4D",
        warning: "#B45309",
      },
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
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)",
        "card-hover":
          "0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
