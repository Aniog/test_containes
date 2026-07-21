/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F1",
        surface: "#F3EDE2",
        foreground: "#211913",
        ink: "#1B1410",
        "muted-foreground": "#7A6C5D",
        accent: "#A2804A",
        "accent-deep": "#6E5327",
        "accent-foreground": "#FBF7EF",
        line: "#E3D9C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
