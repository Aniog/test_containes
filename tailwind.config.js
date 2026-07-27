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
          DEFAULT: "#0B2A4A",
          50: "#EAF1F8",
          100: "#D2E0F0",
          200: "#A6C0E0",
          300: "#6E96C8",
          400: "#3A6BA8",
          500: "#0E3A66",
          600: "#0E3A66",
          700: "#0B2A4A",
          800: "#082038",
          900: "#061726",
        },
        accent: {
          DEFAULT: "#E08A1E",
          50: "#FDF3E6",
          100: "#FAE2C4",
          200: "#F4C788",
          300: "#EDAB4C",
          400: "#E89A2E",
          500: "#E08A1E",
          600: "#C7760F",
          700: "#A05E0C",
          800: "#7A4709",
          900: "#5C3707",
        },
        ink: "#0F172A",
        surface: "#F7F9FC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
