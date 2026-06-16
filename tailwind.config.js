/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1A2B",
          soft: "#16263D",
        },
        slate: {
          DEFAULT: "#334155",
          soft: "#64748B",
        },
        copper: {
          DEFAULT: "#B8763E",
          bright: "#D4A574",
          deep: "#8A5028",
        },
        bone: "#F7F3EC",
        cream: "#FAF8F4",
        line: "#E5E0D6",
        "line-strong": "#C9C0B0",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,26,43,0.04)",
        "card-hover": "0 12px 30px rgba(14,26,43,0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
}
