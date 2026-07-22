/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE7",
        paper: "#FBF7F1",
        ink: "#1B1714",
        "ink-soft": "#2C241E",
        muted: "#6E6258",
        "muted-soft": "#8A7E73",
        gold: "#B08A52",
        "gold-soft": "#D9B98A",
        "gold-deep": "#8E6E3E",
        hairline: "#E4DBCC",
        "hairline-dark": "#2E2620",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.22em",
        wider4: "0.32em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
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
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.32, 0.72, 0, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
