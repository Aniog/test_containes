/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F5EFE6",
          50:  "#FBF8F3",
          100: "#F5EFE6",
          200: "#EDE3D2",
          300: "#E0D2BB",
        },
        cocoa: {
          DEFAULT: "#2A1F1A",
          50:  "#6B5A50",
          100: "#574739",
          200: "#3F2F27",
          300: "#2A1F1A",
          400: "#1F1612",
        },
        sand: {
          DEFAULT: "#E8DCC9",
          50:  "#F4ECDE",
          100: "#E8DCC9",
          200: "#D8C7AB",
        },
        gold: {
          DEFAULT: "#B08D57",
          50:  "#E2CDA5",
          100: "#D4B68A",
          200: "#C19F6E",
          300: "#B08D57",
          400: "#977548",
          500: "#7A5E37",
        },
        line: "#D9CCB5",
        ink: "#1A1310",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.4em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,31,26,0.04), 0 4px 16px rgba(42,31,26,0.06)",
        card: "0 2px 8px rgba(42,31,26,0.05), 0 12px 32px rgba(42,31,26,0.08)",
        drawer: "-24px 0 60px rgba(42,31,26,0.12)",
      },
      maxWidth: {
        editorial: "1440px",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%":   { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
