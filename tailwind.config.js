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
          DEFAULT: "#1A1410",
          900: "#0F0B08",
          800: "#1A1410",
          700: "#2A211A",
          600: "#3A2E25",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          50: "#FBF8F3",
          100: "#F5F0E8",
          200: "#EDE5D6",
        },
        sand: {
          DEFAULT: "#E8DFD3",
          100: "#EFE8DC",
          200: "#E8DFD3",
          300: "#D9CCB8",
        },
        gold: {
          DEFAULT: "#B8935A",
          50: "#F4EBD9",
          100: "#E8D5B0",
          200: "#D4B886",
          300: "#C9A876",
          400: "#B8935A",
          500: "#9D7A47",
          600: "#7E6238",
        },
        muted: {
          DEFAULT: "#7A6F62",
          400: "#9A8F82",
          500: "#7A6F62",
          600: "#5A5048",
        },
        hairline: "#D4C9B8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cormorant", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.24em",
        widest3: "0.32em",
      },
      boxShadow: {
        soft: "0 6px 24px -10px rgba(26, 20, 16, 0.18)",
        card: "0 1px 0 0 rgba(212, 201, 184, 0.6), 0 12px 32px -20px rgba(26, 20, 16, 0.18)",
        cardHover: "0 1px 0 0 rgba(212, 201, 184, 0.8), 0 24px 48px -24px rgba(26, 20, 16, 0.28)",
        drawer: "-20px 0 60px -20px rgba(26, 20, 16, 0.25)",
      },
      maxWidth: {
        editorial: "1440px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.32, 0.72, 0, 1) both",
      },
    },
  },
  plugins: [],
}
