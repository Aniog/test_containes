/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003b71", // Deep Professional Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#1e293b",
        },
        accent: {
          DEFAULT: "#ff6b00", // Trustworthy Orange
          foreground: "#ffffff",
        }
      },
    },
  },
  plugins: [],
}
