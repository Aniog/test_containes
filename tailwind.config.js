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
          DEFAULT: "#F4EEE2",
          soft: "#FBF7EF",
        },
        ink: {
          DEFAULT: "#181410",
          soft: "#2A231B",
        },
        gold: {
          DEFAULT: "#A47E3B",
          soft: "#C9A968",
          deep: "#8A6730",
        },
        taupe: "#6E5F4E",
        hairline: "#D8CDB8",
        wash: "#E8DFCC",
        oxblood: "#5A1F22",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "Cambria", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        product: "0.18em",
      },
      maxWidth: {
        page: "1440px",
        reading: "62ch",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(24,20,16,0.18)",
        card: "0 1px 0 rgba(24,20,16,0.04)",
        lift: "0 20px 40px -28px rgba(24,20,16,0.28)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fadeIn: "fadeIn 600ms ease-out both",
        slideInRight: "slideInRight 350ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
