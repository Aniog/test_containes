/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1612",
          soft: "#2A241E",
          deep: "#0F0C09",
        },
        cream: {
          DEFAULT: "#FAF6EF",
          warm: "#F0E9DC",
          soft: "#F5EFE4",
        },
        champagne: {
          DEFAULT: "#C9A96A",
          deep: "#B8965A",
          dark: "#8C6F3F",
          pale: "#E8D9B7",
        },
        taupe: {
          DEFAULT: "#8B7E66",
          light: "#B8AE94",
        },
        hairline: "#E5DDD0",
        muted: "#6B5F50",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        wider2: "0.14em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,22,18,0.04), 0 8px 24px rgba(26,22,18,0.06)",
        lift: "0 8px 30px rgba(26,22,18,0.10)",
        drawer: "-20px 0 60px rgba(26,22,18,0.18)",
      },
      transitionTimingFunction: {
        velvet: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fadeIn 0.4s ease-out",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
