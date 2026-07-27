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
          DEFAULT: "#0f3d7a",
          dark: "#0a2a56",
          light: "#1e5cad",
        },
        accent: {
          DEFAULT: "#e67e22",
          dark: "#c86a17",
          light: "#f39c4c",
        },
        surface: "#ffffff",
        background: "#f5f7fa",
        muted: "#6b7a90",
        border: "#dde3eb",
        foreground: "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        lift: "0 10px 25px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
}
