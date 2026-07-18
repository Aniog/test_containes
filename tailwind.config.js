/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1410",
        surface: "#241B16",
        "surface-elevated": "#2E231C",
        gold: "#C8A66B",
        "gold-soft": "#A8884E",
        ivory: "#F5EFE6",
        "ivory-muted": "#A39788",
        "ivory-dim": "#7A6F62",
        hairline: "#3A2E26",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
        product: "0.18em",
        button: "0.15em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "drawer-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "overlay-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms ease-out both",
        "drawer-in": "drawer-in 400ms ease-out both",
        "overlay-in": "overlay-in 300ms ease-out both",
      },
    },
  },
  plugins: [],
}
