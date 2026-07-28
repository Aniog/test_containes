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
          DEFAULT: "#0B3D91",
          hover: "#082A66",
          light: "#E6EEF9",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D14336",
          hover: "#B53328",
          light: "#FBE9E7",
          foreground: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0E1726",
          soft: "#475569",
          muted: "#5A6776",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F6F8",
          subtle: "#F8FAFC",
        },
        border: {
          DEFAULT: "#E2E6EC",
          strong: "#CBD2DB",
        },
        success: "#16A34A",
        warning: "#D97706",
        info: "#0284C7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
        elevated: "0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
        card: "0 1px 3px rgba(15, 23, 42, 0.05), 0 4px 12px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
}
