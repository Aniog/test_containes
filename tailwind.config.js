/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
        1200: "1200ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      colors: {
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F1EBE0",
          300: "#E6DCCB",
        },
        onyx: {
          DEFAULT: "#1A1814",
          900: "#0E0D0A",
          800: "#1A1814",
          700: "#2A2620",
          600: "#3A352C",
          500: "#56504A",
        },
        mocha: {
          DEFAULT: "#7A6A5C",
          400: "#9A8A7C",
          500: "#7A6A5C",
          600: "#5A4D42",
        },
        gold: {
          DEFAULT: "#B8924C",
          50: "#F5EFE3",
          100: "#E9DCC0",
          200: "#D9C28A",
          300: "#C7A95F",
          400: "#B8924C",
          500: "#A07B3A",
          600: "#7E5E2C",
        },
        rose: {
          DEFAULT: "#C9A19A",
          200: "#E8D2CD",
          300: "#C9A19A",
          400: "#A87F77",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.14em",
        "widest-2": "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        soft: "0 2px 18px -8px rgba(26, 24, 20, 0.08)",
        card: "0 8px 30px -12px rgba(26, 24, 20, 0.12)",
        drawer: "-20px 0 60px -20px rgba(26, 24, 20, 0.25)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.06) translate(-1%, -1%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: 0.85 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-up": "fade-in-up 0.7s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 30s linear infinite",
        "ken-burns": "ken-burns 12s ease-in-out infinite alternate",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};
