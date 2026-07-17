/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E13",
        steel: "#12161D",
        graphite: "#1B212B",
        line: "#E2E6EC",
        paper: "#F7F8FA",
        amber: {
          DEFAULT: "#F59E0B",
          deep: "#B45309",
        },
        mist: "#98A2B3",
        "slate-body": "#47515F",
      },
      fontFamily: {
        display: ["Archivo", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        overline: "0.25em",
      },
    },
  },
  plugins: [],
}
