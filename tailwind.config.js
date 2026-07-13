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
          navy: "#1A4B8C",
          orange: "#E8621A",
          "orange-dark": "#C9521A",
          "light-blue": "#EBF2FB",
          dark: "#1A2332",
          body: "#4A5568",
          muted: "#718096",
          border: "#E2E8F0",
          green: "#2D7D46",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
