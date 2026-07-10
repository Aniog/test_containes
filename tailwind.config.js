/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5EFE7",
          light: "#FAF6F0",
          dark: "#EFE6D9",
        },
        cocoa: {
          DEFAULT: "#2A1F1A",
          soft: "#5A4A40",
        },
        muted: "#7A6B5F",
        claret: {
          DEFAULT: "#5C2A2A",
          dark: "#4A2222",
        },
        gold: {
          DEFAULT: "#B8924A",
          soft: "#D4B679",
        },
        hairline: "#E5DCD0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
        wider2: "0.22em",
      },
      boxShadow: {
        soft: "0 4px 30px rgba(42,31,26,0.06)",
        product: "0 12px 40px -12px rgba(42,31,26,0.18)",
        drawer: "-20px 0 60px -20px rgba(42,31,26,0.25)",
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 600ms ease-out forwards",
        "slide-in-right": "slideInRight 400ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
