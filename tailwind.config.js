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
          50: "#FDFBF7",
          100: "#FAF6ED",
          200: "#F5EDD8",
          300: "#EDE0BF",
          400: "#E2CFA0",
          500: "#D4BA7E",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#D1D1D1",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#3D3D3D",
          700: "#2A2A2A",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
        gold: {
          DEFAULT: "#C8A55A",
          light: "#D4B76A",
          dark: "#A68940",
          muted: "#B8985A",
        },
        accent: {
          DEFAULT: "#C8A55A",
          hover: "#D4B76A",
          dark: "#A68940",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "Times New Roman", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "0.015em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        "overline": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "6rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
        "elevated": "0 12px 40px -8px rgba(0, 0, 0, 0.12)",
      },
      transitionDuration: {
        "300": "300ms",
        "400": "400ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "shimmer": "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [],
}
