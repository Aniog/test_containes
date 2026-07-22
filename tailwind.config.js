/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        bone: "#F0E9DD",
        espresso: "#1A1814",
        graphite: "#3D352B",
        taupe: "#8B7D6B",
        brass: "#A8824A",
        "brass-deep": "#7A5E2F",
        "brass-soft": "#C9A878",
        oxblood: "#5C2A2A",
        hairline: "#E5DDD0",
        smoke: "#6B5F4F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "label": "0.18em",
        "label-wide": "0.25em",
        "label-tight": "0.12em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "soft": "0 2px 24px -12px rgba(26, 24, 20, 0.25)",
        "card": "0 8px 40px -16px rgba(26, 24, 20, 0.18)",
        "elevated": "0 24px 60px -20px rgba(26, 24, 20, 0.35)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-soft": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-soft": "fade-in-soft 0.5s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
