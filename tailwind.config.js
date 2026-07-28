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
          DEFAULT: "#1d4ed8",
          dark: "#1e3a8a",
          light: "#3b82f6",
        },
        accent: "#f59e0b",
        ink: "#0f172a",
        muted: "#475569",
        line: "#e2e8f0",
        surface: "#ffffff",
        bg: "#f8fafc",
        "bg-alt": "#f1f5f9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}
