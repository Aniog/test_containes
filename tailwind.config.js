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
          DEFAULT: "#F7F1E8",
          soft: "#FAF6EE",
        },
        cream: "#EFE6D6",
        espresso: {
          DEFAULT: "#1F1611",
          soft: "#3A2C22",
        },
        muted: {
          DEFAULT: "#8A7A66",
          light: "#B5A892",
        },
        gold: {
          DEFAULT: "#B89968",
          deep: "#8A6E3F",
          soft: "#D9C9A8",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: "0.18em",
        wider2: "0.22em",
        widest2: "0.32em",
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(31, 22, 17, 0.06)",
        "soft-lg": "0 12px 40px rgba(31, 22, 17, 0.08)",
        drawer: "-20px 0 60px rgba(31, 22, 17, 0.12)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 700ms ease-out forwards",
        "slide-in-right": "slideInRight 350ms cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "slow-zoom": "slowZoom 8s ease-out forwards",
      },
    },
  },
  plugins: [],
}
