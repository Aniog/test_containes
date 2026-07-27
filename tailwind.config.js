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
          50: "#F1F5F9",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#475569",
          500: "#1E3A5F",
          600: "#0E2A47",
          700: "#0A1F36",
          800: "#08182A",
          900: "#06121F",
        },
        accent: {
          DEFAULT: "#C8362B",
          50: "#FEF2F1",
          100: "#FDE2DF",
          200: "#FBBFBA",
          300: "#F58F87",
          400: "#EC5F53",
          500: "#C8362B",
          600: "#A82A22",
          700: "#8A221C",
          800: "#6B1B16",
          900: "#4D1310",
        },
        gold: {
          DEFAULT: "#C9A35C",
          50: "#FBF6EB",
          100: "#F4E8CC",
          200: "#E8D199",
          300: "#D9B973",
          400: "#C9A35C",
          500: "#A8843F",
          600: "#86672F",
          700: "#634B22",
          800: "#403116",
          900: "#1F180B",
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
      boxShadow: {
        card: "0 1px 2px 0 rgba(15, 42, 71, 0.06), 0 1px 3px 0 rgba(15, 42, 71, 0.08)",
        cardHover: "0 4px 6px -1px rgba(15, 42, 71, 0.1), 0 8px 16px -2px rgba(15, 42, 71, 0.08)",
        navyGlow: "0 12px 32px -8px rgba(14, 42, 71, 0.45)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
