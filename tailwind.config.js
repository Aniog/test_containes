/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        "navy-deep": "#13315C",
        "blue-action": "#1E6091",
        gold: "#C9A227",
        "gold-deep": "#b08e1f",
        "bg-soft": "#F6F8FB",
        "border-soft": "#E4E9F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
}
