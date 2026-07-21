/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette: deep refined base + warm metallic accents
        ivory: {
          DEFAULT: "#F7F2EC",
          50: "#FDFBF7",
          100: "#F7F2EC",
          200: "#EFE7DA",
        },
        sand: {
          DEFAULT: "#ECE3D6",
          100: "#F2EBE0",
          200: "#ECE3D6",
          300: "#DCD0BD",
        },
        mocha: {
          DEFAULT: "#8A7A6A",
          400: "#A89685",
          500: "#8A7A6A",
          600: "#6E5F52",
        },
        espresso: {
          DEFAULT: "#1F1612",
          400: "#3B2A22",
          500: "#2C1F19",
          600: "#1F1612",
          700: "#15100D",
        },
        gold: {
          DEFAULT: "#B08A4A",
          100: "#E6D2A8",
          200: "#D4B27C",
          300: "#C29F61",
          400: "#B08A4A",
          500: "#9A7639",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cormorant", "Garamond", "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        "product": "0.18em",
        "wider2": "0.22em",
        "widest2": "0.3em",
      },
      maxWidth: {
        "screen-3xl": "1760px",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(31, 22, 18, 0.04), 0 8px 24px rgba(31, 22, 18, 0.06)",
        "lift": "0 4px 12px rgba(31, 22, 18, 0.08), 0 16px 40px rgba(31, 22, 18, 0.10)",
        "ring-soft": "0 0 0 1px rgba(31, 22, 18, 0.08)",
      },
      transitionTimingFunction: {
        "velmora": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "shimmer": "shimmer 2.4s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
