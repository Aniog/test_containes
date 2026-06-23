/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: "#0a0d14",
          surface: "#11151f",
          "surface-2": "#171c2a",
          line: "#222a3d",
          text: "#e7ecf5",
          muted: "#9aa3b8",
          accent: "#7df9c6",
          "accent-2": "#8ab4ff",
          "accent-3": "#f4a8ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
