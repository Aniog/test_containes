/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm refined editorial palette
        ivory: {
          DEFAULT: "#F6F1EA",
          50: "#FBF8F4",
          100: "#F6F1EA",
          200: "#EFE7DA",
          300: "#E5D8C2",
        },
        sable: {
          DEFAULT: "#1F1B17",
          50: "#3A332B",
          100: "#2A241E",
          200: "#241F1A",
          300: "#1F1B17",
          400: "#18140F",
          500: "#100D09",
        },
        taupe: {
          DEFAULT: "#8A7E6E",
          light: "#A89B89",
          dark: "#6B6053",
        },
        gold: {
          DEFAULT: "#B08B4F",
          light: "#C9A26A",
          dark: "#8E6E3F",
          soft: "#E8D9BC",
        },
        rose: {
          DEFAULT: "#C99A8E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.3em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31, 27, 23, 0.04), 0 4px 24px rgba(31, 27, 23, 0.06)",
        card: "0 2px 8px rgba(31, 27, 23, 0.05), 0 12px 40px rgba(31, 27, 23, 0.08)",
        drawer: "-12px 0 40px rgba(31, 27, 23, 0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
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
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.35s cubic-bezier(0.32,0.72,0,1) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
}
