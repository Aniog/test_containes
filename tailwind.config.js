/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "tracking-widest2",
    "tracking-widest3",
    "max-w-8xl",
    "shadow-soft",
    "shadow-card",
    "shadow-drawer",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F6F1EA",
          200: "#EDE5DA",
          300: "#E1D5C4",
          400: "#D4C4AD",
        },
        espresso: {
          50: "#3A2F26",
          100: "#2C231C",
          200: "#241B14",
          300: "#1A1410",
          400: "#100B08",
        },
        gold: {
          50: "#F7EFDF",
          100: "#EAD7B0",
          200: "#D9B97E",
          300: "#C49A55",
          400: "#B68A4E",
          500: "#A87A3E",
          600: "#8C6A3E",
          700: "#6E522E",
        },
        muted: {
          DEFAULT: "#6B5E50",
          soft: "#8A7E6F",
        },
        hairline: "#D9CFBE",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.4em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(26, 20, 16, 0.18)",
        card: "0 1px 2px rgba(26, 20, 16, 0.04), 0 8px 24px -12px rgba(26, 20, 16, 0.12)",
        drawer: "-24px 0 60px -20px rgba(26, 20, 16, 0.25)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        slideInRight: "slideInRight 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
