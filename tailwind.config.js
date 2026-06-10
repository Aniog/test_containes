/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          50:  "#F2F5F9",
          100: "#DDE4EE",
          200: "#B6C3D5",
          300: "#8B9FB8",
          400: "#5C7493",
          500: "#3A5374",
          600: "#1E3A5F",
          700: "#173050",
          800: "#112640",
          900: "#0E2A47",
          950: "#0A1626",
        },
        accent: {
          50:  "#FBF6EB",
          100: "#F4E8C8",
          200: "#E8D293",
          300: "#D9B85F",
          400: "#CDAE50",
          500: "#C8A45C",
          600: "#B18A3D",
          700: "#8E6B30",
          800: "#6B4F25",
          900: "#4A371A",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
        cardHover: "0 8px 24px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
}
