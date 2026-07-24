/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6F2",
        surface: "#FFFFFF",
        ink: "#1A1A1A",
        "warm-gray": "#6B6B6B",
        muted: "#9E9E9E",
        accent: "#B89B72",
        "accent-hover": "#A68A60",
        divider: "#E6E0D8",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.18em",
        wider: "0.08em",
        wide: "0.04em",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
        subtle: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
