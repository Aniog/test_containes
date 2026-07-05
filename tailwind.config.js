/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F0E6",
        foreground: "#1F1A14",
        card: "#FFFFFF",
        "card-foreground": "#1F1A14",
        muted: "#EFE7D9",
        "muted-foreground": "#6B5F4F",
        accent: {
          DEFAULT: "#B58A4C",
          foreground: "#FFFFFF",
        },
        border: "#E2D8C5",
        input: "#E2D8C5",
        ring: "#B58A4C",
        ink: "#2A2118",
        cream: "#FBF7EE",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.32em",
      },
      maxWidth: {
        container: "1400px",
      },
      borderRadius: {
        none: "0px",
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
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        "fade-in": "fade-in 600ms ease-out both",
        "marquee-x": "marquee-x 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
