/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6F0",
          50: "#FDFBF7",
          100: "#FAF6F0",
          200: "#F2EBE0",
          300: "#E8DCC9",
        },
        ink: {
          DEFAULT: "#1A1612",
          900: "#0F0D0A",
          800: "#1A1612",
          700: "#2B2520",
          600: "#3D332B",
          500: "#5C4E42",
        },
        gold: {
          DEFAULT: "#B68A4E",
          50:  "#F5EFE4",
          100: "#E8D9B8",
          200: "#D4BC8A",
          300: "#B68A4E",
          400: "#9C7239",
          500: "#8E6938",
        },
        taupe: {
          DEFAULT: "#B89F87",
          200: "#D6C4B0",
          300: "#B89F87",
          400: "#9A7E66",
        },
        muted: "#6B5E54",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wide-luxe": "0.22em",
        "wider-luxe": "0.3em",
        "widest-luxe": "0.4em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 8px 30px -10px rgba(26, 22, 18, 0.12)",
        card: "0 12px 40px -16px rgba(26, 22, 18, 0.18)",
        drawer: "-20px 0 50px -20px rgba(26, 22, 18, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-up": "fadeUp 0.9s ease-out both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
    },
  },
  plugins: [],
}
