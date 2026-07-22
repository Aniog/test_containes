/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        sand: "#F1E9DE",
        ink: "#221B12",
        inkSoft: "#6E6353",
        gold: "#A9803E",
        goldDark: "#8F6A2F",
        goldSoft: "#E7D6B8",
        line: "#E4DACB",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.18em",
        overline: "0.3em",
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(34,27,18,0.25)",
        soft: "0 10px 30px -12px rgba(34,27,18,0.18)",
        drawer: "-20px 0 60px -20px rgba(34,27,18,0.35)",
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
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-left": "slide-in-left 0.4s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
}
