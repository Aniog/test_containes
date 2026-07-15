/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Force-generate utilities for our custom palette so `@apply` works
  // reliably even when the class is only referenced from inside a CSS layer.
  safelist: [
    "text-muted", "text-ink", "text-cocoa", "text-ivory", "text-gold", "text-gold-deep", "text-line", "text-parchment",
    "bg-muted", "bg-ink", "bg-cocoa", "bg-cocoa-soft", "bg-ivory", "bg-parchment", "bg-gold", "bg-gold-deep", "bg-gold-pale", "bg-line",
    "border-muted", "border-ink", "border-cocoa", "border-ivory", "border-gold", "border-gold-deep", "border-gold-pale", "border-line", "border-parchment",
    "ring-muted", "ring-ink", "ring-cocoa", "ring-ivory", "ring-gold", "ring-gold-deep", "ring-gold-pale", "ring-line",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1EA",
        parchment: "#EFE7DC",
        cocoa: "#1F1A14",
        "cocoa-soft": "#2A241B",
        gold: {
          DEFAULT: "#B89968",
          deep: "#8E7344",
          pale: "#E9DCC2",
        },
        ink: "#1F1A14",
        muted: "#6E655A",
        line: "#D9CFBE",
        success: "#5C7A4A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        shell: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,26,20,0.04), 0 8px 24px rgba(31,26,20,0.06)",
        lift: "0 1px 2px rgba(31,26,20,0.05), 0 18px 40px rgba(31,26,20,0.10)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 600ms ease-out both",
        "slide-in-right": "slideInRight 320ms cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
}
