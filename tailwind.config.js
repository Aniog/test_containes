/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1410",
        "ink-soft": "#2A221B",
        bone: "#F5F0E8",
        cream: "#EBE3D5",
        sand: "#D9CFBE",
        line: "#D9D0C0",
        taupe: "#8B7E6E",
        gold: "#B08855",
        "gold-deep": "#8A6A3E",
        ivory: "#FBF8F3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
      maxWidth: {
        prose: "720px",
        content: "1440px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(26, 20, 16, 0.06)",
        card: "0 18px 50px -20px rgba(26, 20, 16, 0.18)",
      },
      transitionTimingFunction: {
        velvet: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-fade": "soft-fade 600ms ease-out both",
      },
    },
  },
  plugins: [],
};
