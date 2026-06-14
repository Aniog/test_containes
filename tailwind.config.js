/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        slate: {
          850: "#141C2E",
        },
        line: "#1F2A40",
        copper: {
          400: "#E2BC73",
          500: "#D4A24C",
          600: "#B98A3A",
        },
        steel: {
          400: "#7B8FA8",
        },
        text: {
          DEFAULT: "#E6EBF2",
          muted: "#9AA5B8",
          dim: "#5E6A82",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
}
