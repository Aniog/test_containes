/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora brand palette — warm, editorial, demi-fine luxury
        bone: {
          50:  "#FBF7F1",
          100: "#F6F1EA",
          200: "#EFE7DA",
          300: "#E5D8C5",
        },
        clay: {
          DEFAULT: "#E8D9C8",
          50: "#F2E8DC",
          100: "#E8D9C8",
          200: "#D8C0A4",
        },
        gold: {
          50:  "#F6EEDB",
          100: "#E6D4A8",
          200: "#D2B678",
          300: "#B08D57",  // antique gold (accent)
          400: "#9A7644",
          500: "#7A5A30",
        },
        espresso: {
          DEFAULT: "#1F1A17", // primary text / dark sections
          50:  "#4A3F38",
          100: "#3A312B",
          200: "#2C2520",
          300: "#1F1A17",
        },
        taupe: {
          DEFAULT: "#A89A8A",
          light: "#D9CFC2",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.32em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,26,23,0.04), 0 8px 24px rgba(31,26,23,0.06)",
        card: "0 1px 2px rgba(31,26,23,0.05), 0 12px 32px rgba(31,26,23,0.08)",
        drawer: "-12px 0 40px rgba(31,26,23,0.10)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%":   { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.4s cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 2.4s linear infinite",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
