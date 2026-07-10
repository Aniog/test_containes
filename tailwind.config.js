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
          DEFAULT: "#1A1814",
          900: "#0E0D0A",
          800: "#1A1814",
          700: "#26221C",
        },
        cream: {
          DEFAULT: "#F5EFE3",
          50: "#FBF7EE",
          100: "#F5EFE3",
          200: "#EDE5D4",
          300: "#E1D5BD",
        },
        gold: {
          DEFAULT: "#B8945F",
          50: "#F4EAD7",
          100: "#E8D4AE",
          200: "#D6B785",
          300: "#C5A06A",
          400: "#B8945F",
          500: "#A47E4A",
          600: "#8A6839",
        },
        sand: {
          DEFAULT: "#8B7B68",
          400: "#A99A87",
          500: "#8B7B68",
          600: "#6B6056",
        },
        hairline: "#E5DED2",
        muted: "#6B6056",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cormorant", "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
      maxWidth: {
        editorial: "1320px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,24,20,0.04), 0 8px 24px rgba(26,24,20,0.06)",
        lift: "0 2px 4px rgba(26,24,20,0.05), 0 16px 40px rgba(26,24,20,0.10)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both",
        slideInRight: "slideInRight 0.35s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
