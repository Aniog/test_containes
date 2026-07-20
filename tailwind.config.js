/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F6F1EA",
        ivory: "#FBF7F1",
        ink: "#1F1A16",
        gold: "#B58A4A",
        "gold-deep": "#8B6B3A",
        "gold-soft": "#D4B47A",
        champagne: "#E8D9BE",
        muted: "#A89A8B",
        hairline: "#E5DCD0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.25em",
      },
      maxWidth: {
        content: "1440px",
        prose2: "65ch",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(31, 26, 22, 0.08)",
        card: "0 8px 32px -12px rgba(31, 26, 22, 0.10)",
        drawer: "-12px 0 40px -8px rgba(31, 26, 22, 0.18)",
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
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.16,1,0.3,1) both",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
