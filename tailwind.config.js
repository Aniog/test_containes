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
          ink: "#0B1E3A",
          primary: "#163C73",
          "primary-hover": "#0F2C57",
          accent: "#C8A45D",
          surface: "#F5F7FA",
          "surface-2": "#EDF1F6",
          line: "#E3E8EF",
          text: "#0F172A",
          muted: "#5A6A82",
          "muted-2": "#8694AB",
          success: "#15803D",
          white: "#FFFFFF",
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
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
