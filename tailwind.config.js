/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161311",
        oat: "#F4ECE0",
        bone: "#EAE0D1",
        champagne: "#C8A972",
        "champagne-deep": "#A7864A",
        mist: "#7A726A",
        cream: "#FBF7F0",
        "rose-gold": "#D8B192",
        "hairline": "#E2D9C7",
        "hairline-dark": "#2A2520",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.12em",
        "wider-3": "0.18em",
        "wider-4": "0.25em",
      },
      maxWidth: {
        "8xl": "1280px",
        "9xl": "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 19, 17, 0.04)",
        "soft-lg": "0 8px 24px rgba(22, 19, 17, 0.06)",
        drawer: "-12px 0 40px rgba(22, 19, 17, 0.10)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-up": "fade-up 0.6s ease-out both",
        "drawer-in": "drawer-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
