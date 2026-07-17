/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial neutrals
        canvas: {
          DEFAULT: "#F6F1EA",
          soft: "#EFE7D9",
          deep: "#E8DCC4",
        },
        espresso: {
          DEFAULT: "#1A1612",
          soft: "#221C16",
          warm: "#2C241C",
        },
        gold: {
          DEFAULT: "#B8935A",
          hover: "#A07F4B",
          soft: "#E8DCC4",
          deep: "#8E6E3F",
        },
        ink: {
          DEFAULT: "#1F1A14",
          secondary: "#5A4F40",
          muted: "#8E8270",
          onDark: "#F6F1EA",
          onDarkSecondary: "#C9BFAE",
          onDarkMuted: "#9C8F7A",
        },
        line: {
          DEFAULT: "#DCD2BD",
          soft: "#E7DEC9",
          dark: "rgba(246,241,234,0.14)",
        },
        success: "#5C7A4F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,26,20,0.04), 0 8px 24px rgba(31,26,20,0.06)",
        card: "0 2px 6px rgba(31,26,20,0.05), 0 18px 40px rgba(31,26,20,0.08)",
        drawer: "-24px 0 60px rgba(26,22,18,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
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
        fadeUp: "fadeUp 0.7s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both",
        slideInRight: "slideInRight 0.35s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
