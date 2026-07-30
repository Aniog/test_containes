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
          navy:    "#0D2B4E",
          blue:    "#1A5FA8",
          sky:     "#2E8BC0",
          accent:  "#E8A020",
          light:   "#F0F6FF",
          muted:   "#6B7A8D",
          border:  "#D1DCE8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
