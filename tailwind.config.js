/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        ivory: "#FBF7F1",
        bone: "#EDE5D7",
        ink: {
          DEFAULT: "#1F1813",
          soft: "#6B5D50",
          inverse: "#F4ECD9",
          deep: "#1A1410",
          deepSoft: "#2A201A",
        },
        gold: {
          DEFAULT: "#A8824A",
          soft: "#C9A876",
          deep: "#7E5F2E",
        },
        hairline: "#D8C9B5",
        hairlineDark: "#3A2E24",
        success: "#5C7556",
        error: "#8C3A2E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
        product: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        cta: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        content: "1440px",
        prose: "62ch",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(31, 24, 19, 0.04)",
        md: "0 8px 24px -8px rgba(31, 24, 19, 0.10)",
        lg: "0 20px 48px -12px rgba(31, 24, 19, 0.18)",
        xl: "0 32px 64px -16px rgba(31, 24, 19, 0.22)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 320ms cubic-bezier(0.32, 0.72, 0, 1) both",
        "fade-in": "fadeIn 400ms ease-out both",
        "rise-in": "riseIn 600ms ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}
