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
          DEFAULT: "#1A120B",
          900: "#0F0A06",
          800: "#1A120B",
          700: "#241A12",
          600: "#2E2318",
        },
        bone: {
          DEFAULT: "#F7F1E8",
          50: "#FBF8F2",
          100: "#F7F1E8",
          200: "#EFE7D7",
        },
        sand: {
          DEFAULT: "#E8DCC9",
          100: "#F0E6D4",
          200: "#E8DCC9",
          300: "#D9C9AE",
        },
        champagne: {
          DEFAULT: "#C9A36B",
          100: "#E5D2A8",
          300: "#D6B784",
          500: "#C9A36B",
          700: "#9C7A47",
          900: "#6E5430",
        },
        claret: {
          DEFAULT: "#6E1F2A",
          500: "#6E1F2A",
          600: "#561722",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cormorant", "Garamond", "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26, 18, 11, 0.04), 0 8px 24px rgba(26, 18, 11, 0.06)",
        lift: "0 2px 6px rgba(26, 18, 11, 0.08), 0 18px 40px rgba(26, 18, 11, 0.10)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
}
