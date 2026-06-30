/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F2",
        surface: "#FFFFFF",
        "surface-warm": "#F5EFE6",
        ink: "#1F1A14",
        "ink-muted": "#7A6F62",
        "ink-soft": "#A8A096",
        gold: "#B68B4A",
        "gold-deep": "#8B6630",
        "gold-soft": "#E8D9BC",
        "gold-tint": "#F4EBD8",
        line: "#E8DFD2",
        "line-soft": "#F0E9DD",
        overlay: "#1A140A",
        success: "#4A7C59",
        danger: "#9B3D2F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "widest-2": "0.24em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        "soft-1": "0 1px 2px rgba(31, 26, 20, 0.04)",
        "soft-2": "0 8px 24px -8px rgba(31, 26, 20, 0.08)",
        "soft-3": "0 20px 50px -20px rgba(31, 26, 20, 0.15)",
        drawer: "-10px 0 40px -10px rgba(31, 26, 20, 0.18)",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
        700: "700ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        "fade-in": "fade-in 500ms ease-out both",
        "slide-in-right": "slide-in-right 400ms cubic-bezier(0.32, 0.72, 0, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
