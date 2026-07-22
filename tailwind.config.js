/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1EA",
        ivory: "#FBF8F3",
        sand: "#EEE6D9",
        ink: "#1B1410",
        "ink-muted": "#5C5045",
        taupe: "#8A7A6A",
        hairline: "#D9CFC1",
        accent: {
          DEFAULT: "#B5905A",
          deep: "#8A6A3E",
          soft: "#E6D5B6",
        },
        success: "#5C6B4A",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "widest-2": "0.28em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
        editorial: "1280px",
      },
      boxShadow: {
        soft: "0 8px 24px -16px rgba(27,20,16,0.18)",
        card: "0 14px 40px -28px rgba(27,20,16,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.3s ease-out both",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
