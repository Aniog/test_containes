/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0D0B",
        "ink-soft": "#1A1814",
        bone: "#F6F1E7",
        cream: "#EFE6D5",
        taupe: "#E4DBC9",
        "taupe-deep": "#C9BCA1",
        hairline: "#D8CDB7",
        "hairline-dark": "#2A2722",
        gold: "#B89968",
        "gold-soft": "#D4B98A",
        "gold-deep": "#8C7349",
        "muted-light": "#7A7368",
        "muted-dark": "#A89B85",
        success: "#5B6F4E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.22em",
        "editorial-wide": "0.32em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
