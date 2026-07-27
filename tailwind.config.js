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
          50: "#F0F5FA",
          100: "#DCE8F2",
          200: "#B9D0E4",
          300: "#8AB0D0",
          400: "#5A8DBE",
          500: "#1E5A8E",
          600: "#1A4E7E",
          700: "#163F66",
          800: "#102F4F",
          900: "#0F2A47",
          950: "#0A1D33",
        },
        accent: {
          50: "#FDF6EC",
          100: "#FAE9CC",
          200: "#F4D29A",
          300: "#EEB862",
          400: "#E8A33D",
          500: "#D98A1F",
          600: "#B06E15",
          700: "#875312",
          800: "#5E3A0E",
          900: "#3A2308",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
