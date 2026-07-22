/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  // Safelist brand colors and component utility patterns used by @apply
  // so the JIT compiler generates them even before they appear in scanned JSX.
  safelist: [
    "bg-espresso",
    "bg-cocoa",
    "bg-cream",
    "bg-ivory",
    "bg-blush",
    "bg-champagne",
    "bg-champagne-deep",
    "bg-bone",
    "text-espresso",
    "text-cocoa",
    "text-cream",
    "text-ivory",
    "text-blush",
    "text-champagne",
    "text-champagne-deep",
    "text-ink",
    "text-ink-soft",
    "text-mute",
    "text-bone",
    "text-bone-soft",
    "border-ink",
    "border-bone",
    "border-espresso",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1A1410",
        cocoa: "#2A1F18",
        cream: "#F5EFE6",
        ivory: "#FAF6F0",
        blush: "#EFE3D3",
        champagne: "#C9A876",
        "champagne-deep": "#A88B5C",
        "champagne-soft": "#E8C892",
        ink: "#2A1F18",
        "ink-soft": "#5C4A3E",
        mute: "#8A7E72",
        bone: "#F5EFE6",
        "bone-soft": "#C9BFB1",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "wider-3": "0.25em",
        "wider-4": "0.32em",
      },
      maxWidth: {
        "screen-3xl": "1440px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
