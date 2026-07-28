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
          DEFAULT: "#0F2A4A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E08A1E",
          foreground: "#1A1206",
        },
        background: "#F7F8FA",
        foreground: "#0F1B2D",
        card: "#FFFFFF",
        "card-foreground": "#0F1B2D",
        muted: "#EEF1F6",
        "muted-foreground": "#5A6678",
        border: "#E2E7EF",
        success: "#1F8A4C",
        warning: "#C77700",
        danger: "#C0392B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem",
      },
    },
  },
  plugins: [],
}
