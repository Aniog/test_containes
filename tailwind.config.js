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
          DEFAULT: "#1e3a5f",
          foreground: "#ffffff",
          50: "#f1f5f9",
          100: "#e0e9f2",
          200: "#bcd2e6",
          300: "#8fb3d4",
          400: "#5d8cbd",
          500: "#2f6db5",
          600: "#255a98",
          700: "#1e3a5f",
          800: "#17304d",
          900: "#102338",
        },
        accent: {
          DEFAULT: "#d97706",
          foreground: "#ffffff",
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#f59e0b",
          500: "#d97706",
          600: "#b45309",
          700: "#92400e",
        },
        background: "#f8fafc",
        foreground: "#0f172a",
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        border: "#e2e8f0",
        success: {
          DEFAULT: "#15803d",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
}
