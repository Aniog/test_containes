/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F0E6",
        "cream-deep": "#ECE2D1",
        ivory: "#FBF7F0",
        espresso: "#1B1612",
        "espresso-soft": "#3A322B",
        taupe: "#8A7B6B",
        champagne: "#B08A55",
        "champagne-deep": "#8E6E3F",
        "champagne-soft": "#D9C29A",
        success: "#5C6B4F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        label: "0.2em",
        product: "0.18em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      boxShadow: {
        soft: "0 2px 24px -12px rgba(27, 22, 18, 0.18)",
        "soft-lg": "0 18px 40px -18px rgba(27, 22, 18, 0.28)",
        drawer: "-24px 0 60px -20px rgba(27, 22, 18, 0.25)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
