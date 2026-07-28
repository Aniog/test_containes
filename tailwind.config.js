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
          DEFAULT: "#0F4C81",
          dark: "#0A3A63",
          light: "#E8F1F9",
        },
        accent: {
          DEFAULT: "#F5A623",
          dark: "#D4881A",
        },
        ink: "#0F1B2D",
        "slate-ink": "#3B4A60",
        surface: "#FFFFFF",
        bg: "#F6F8FB",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(15,27,45,0.06), 0 1px 2px -1px rgba(15,27,45,0.06)",
        lift: "0 10px 30px -10px rgba(15,27,45,0.18)",
      },
    },
  },
  plugins: [],
}
