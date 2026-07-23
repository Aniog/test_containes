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
          50: "#FBF8F4",
          100: "#F6F1E8",
          200: "#EFE7D6",
        },
        sand: {
          100: "#F2E9DA",
          200: "#E8DCC4",
        },
        champagne: {
          200: "#E6CC9A",
          300: "#D9B97E",
          400: "#C7A065",
          500: "#B68A4E",
          600: "#A07A40",
        },
        brass: {
          600: "#9B7A47",
          700: "#8C6A3A",
          800: "#6E5128",
        },
        taupe: {
          300: "#B8ADA0",
          400: "#A39688",
          500: "#8A7E72",
          600: "#6E6258",
        },
        cocoa: {
          400: "#8A7A6C",
          500: "#6F5E50",
          700: "#5A4A3F",
          800: "#3E3128",
          900: "#2A221D",
        },
        espresso: {
          800: "#2A231E",
          900: "#1F1A17",
          950: "#14110F",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        product: "0.14em",
        button: "0.18em",
      },
      maxWidth: {
        editorial: "64rem",
        site: "80rem",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(31, 26, 23, 0.25)",
        ring: "0 0 0 1px rgba(178, 138, 78, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "marquee-slow": "marquee-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
}
