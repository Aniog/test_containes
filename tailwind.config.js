/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep obsidian base + warm champagne gold accents
        obsidian: "#1a1714",
        "obsidian-light": "#2c2825",
        "obsidian-mid": "#3d3830",
        champagne: "#c9a96e",
        "champagne-light": "#e0c898",
        "champagne-pale": "#f5edd8",
        ivory: "#faf7f2",
        "ivory-dark": "#f0ebe0",
        stone: "#8a8278",
        "stone-light": "#b5afa6",
        blush: "#e8d5c4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
        "drawer-in": "drawerIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: { "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        drawerIn: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}
