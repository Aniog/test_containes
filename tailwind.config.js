/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F0E6",
        bone: "#FAF6EE",
        sand: "#E5DCC9",
        taupe: "#B8A78A",
        brass: "#B08D5A",
        "brass-soft": "#C9A878",
        espresso: "#1F1A14",
        "espresso-80": "rgba(31,26,20,0.8)",
        "espresso-60": "rgba(31,26,20,0.6)",
        "espresso-40": "rgba(31,26,20,0.4)",
        "espresso-20": "rgba(31,26,20,0.2)",
        "espresso-10": "rgba(31,26,20,0.1)",
        "ivory-90": "rgba(246,240,230,0.9)",
        "ivory-80": "rgba(246,240,230,0.8)",
        noir: "#100D09",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.22em",
        "editorial-lg": "0.28em",
        "editorial-sm": "0.14em",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(31,26,20,0.12)",
        lift: "0 14px 40px -16px rgba(31,26,20,0.18)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-slow": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "fade-in-slow": "fade-in-slow 1.2s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.4,0,0.2,1) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
}
