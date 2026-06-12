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
          DEFAULT: "#0B2545",
          500: "#1E4A8A",
          700: "#13315C",
          900: "#081A33",
        },
        accent: {
          DEFAULT: "#1F6FEB",
          600: "#1856C2",
        },
        gold: {
          DEFAULT: "#C8A24B",
        },
        surface: "#F5F7FA",
        card: "#FFFFFF",
        "border-soft": "#E2E8F0",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
}
