/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F3EA",
        sand: "#EFE6D6",
        ivory: "#FBF7F0",
        espresso: "#1C1611",
        "espresso-soft": "#2A201A",
        ink: "#2C2218",
        muted: "#8A7E6E",
        hairline: "#D9CCB8",
        "hairline-dark": "#3A2E22",
        gold: {
          DEFAULT: "#B8945A",
          deep: "#9A7A45",
          light: "#D4B97E",
        },
        terracotta: "#A0524B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        wide: "0.14em",
        "wide-2": "0.18em",
        "wide-3": "0.24em",
        widest: "0.3em",
      },
      maxWidth: {
        editorial: "1280px",
        container: "1400px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(28, 22, 17, 0.06)",
        medium: "0 20px 60px rgba(28, 22, 17, 0.10)",
        deep: "0 30px 80px rgba(28, 22, 17, 0.18)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.6s ease both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};