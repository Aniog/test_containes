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
          50: "#F0F5FB",
          100: "#DCE6F2",
          200: "#B4C7E0",
          300: "#7E9BC4",
          400: "#3D6CA0",
          500: "#2E6CB5",
          600: "#1F4F8A",
          700: "#143A6B",
          800: "#0A2540",
          900: "#0A2540",
          950: "#061529",
        },
        accent: {
          50: "#FDF3E7",
          100: "#FBE2C2",
          200: "#F6C280",
          300: "#EFA34A",
          400: "#E68A28",
          500: "#E07A1F",
          600: "#C26410",
          700: "#9C4F0D",
        },
        success: {
          50: "#ECFDF3",
          100: "#D1FADF",
          500: "#22C55E",
          600: "#15803D",
          700: "#166534",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
