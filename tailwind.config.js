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
          hover: "#082E6E",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E87722",
          hover: "#C9641A",
          foreground: "#FFFFFF",
        },
        ink: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        surface: "#F8FAFC",
        line: "#E2E8F0",
        footer: "#0B1220",
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
