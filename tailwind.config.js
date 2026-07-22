/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1EA",
        bone: "#FBF8F3",
        ink: "#1F1A17",
        espresso: "#4A4039",
        muted: "#7A6F66",
        champagne: {
          DEFAULT: "#B68B5A",
          deep: "#9A7340",
          soft: "#D9BD96",
        },
        blush: "#E8D8C8",
        hairline: "#E5DED3",
        charcoal: "#26211D",
        cream: "#EFE6D9",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
        widest2: "0.25em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(31, 26, 23, 0.06)",
        elevated: "0 12px 40px rgba(31, 26, 23, 0.10)",
        chip: "0 2px 8px rgba(31, 26, 23, 0.08)",
      },
      fontSize: {
        display: ["72px", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h1: ["56px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["40px", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
        h3: ["24px", { lineHeight: "1.3" }],
        lead: ["18px", { lineHeight: "1.6" }],
        body: ["15px", { lineHeight: "1.65" }],
        small: ["13px", { lineHeight: "1.5" }],
        eyebrow: ["11px", { lineHeight: "1", letterSpacing: "0.25em" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
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
        "fade-in": "fadeIn 600ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "slide-in-right": "slideInRight 320ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
