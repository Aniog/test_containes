/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1310",
        cream: "#F6F0E6",
        champagne: "#C8A66B",
        bronze: "#8A6A3D",
        rose: "#E8D6C3",
        pearl: "#FBF7F0",
        mute: "#6B5A4A",
        muteOnDark: "#A99B8A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.14em",
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,19,16,0.04), 0 8px 24px rgba(26,19,16,0.04)",
        softer: "0 1px 2px rgba(26,19,16,0.03)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fadeUp: "fadeUp 600ms ease-out both",
      },
    },
  },
  plugins: [],
}
