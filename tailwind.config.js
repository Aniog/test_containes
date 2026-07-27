/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A47",
          hover: "#0B2240",
          900: "#0E2A47",
          800: "#16365A",
          700: "#1F466E",
        },
        teal: {
          DEFAULT: "#0F7B7B",
          hover: "#0B6262",
          light: "#E6F1F0",
        },
        warm: {
          50: "#FBF8F2",
          100: "#F5F1EA",
          200: "#EFE8DC",
          300: "#E2DCCE",
          400: "#C9BFA8",
        },
        ink: {
          DEFAULT: "#0E2A47",
          secondary: "#4A5A6B",
          muted: "#7A8595",
          onDark: "#F5F1EA",
          onDarkMuted: "#9FB0C2",
        },
        success: "#1F8A57",
        warning: "#B5651D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 42, 71, 0.04)",
        cardHover: "0 6px 18px rgba(14, 42, 71, 0.08)",
        ring: "0 0 0 2px rgba(15, 123, 123, 0.25)",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
}
