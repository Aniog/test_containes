/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: "#24191d",
          ivory: "#f7f1ea",
          panel: "#efe5da",
          muted: "#8b7a72",
          gold: "#d5b27b",
          accent: "#c8a067",
          "accent-foreground": "#22181b",
          line: "rgba(36, 25, 29, 0.14)",
          overlay: "rgba(36, 25, 29, 0.72)",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(36, 25, 29, 0.08)",
        card: "0 16px 32px rgba(36, 25, 29, 0.08)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "velmora-glow": "radial-gradient(circle at top, rgba(213, 178, 123, 0.18), transparent 42%)",
      },
    },
  },
  plugins: [],
}
