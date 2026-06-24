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
          bg: "#05070d",
          surface: "#0b1020",
          "surface-2": "#111934",
          border: "#1f2a4a",
          fg: "#e6ecff",
          muted: "#94a3c4",
          accent: "#7cf9d8",
          "accent-2": "#a78bfa",
          "accent-3": "#f472b6",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "cosmos-gradient":
          "linear-gradient(135deg, #7cf9d8 0%, #a78bfa 50%, #f472b6 100%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
