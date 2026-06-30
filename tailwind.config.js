/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50:  "#FBF8F3",
          100: "#F8F4EE",
          200: "#F1EADC",
          300: "#E5DDD0",
        },
        espresso: {
          900: "#1F1A14",
          800: "#2A241B",
          700: "#3A3227",
          600: "#5C5043",
          500: "#6B5D4F",
          400: "#8A7C6E",
        },
        gold: {
          50:  "#FBF6EC",
          100: "#F2E5C9",
          200: "#E6CFA0",
          300: "#D6B679",
          400: "#B8935A",
          500: "#A07E48",
          600: "#8B6F3D",
          700: "#6E5530",
          800: "#4F3D22",
        },
        hairline: "#E5DDD0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans:  ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2:  "0.18em",
        widest2: "0.28em",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)",    { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.4rem, 5vw, 4rem)",  { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.8rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft:   "0 1px 2px rgba(31,26,20,0.04), 0 8px 24px rgba(31,26,20,0.06)",
        card:   "0 1px 2px rgba(31,26,20,0.05), 0 12px 32px rgba(31,26,20,0.08)",
        drawer: "-24px 0 60px rgba(31,26,20,0.18)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp:  "fadeUp 0.7s cubic-bezier(0.22,0.61,0.36,1) both",
        shimmer: "shimmer 8s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
