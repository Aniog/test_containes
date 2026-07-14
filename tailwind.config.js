export default {
  theme: {
    extend: {
      colors: {
        background: "#F9F8F6", // Soft sand/neutral
        foreground: "#1A1A1A", // Off-black
        primary: {
          DEFAULT: "#8B7355", // Refined deep gold/bronze
          light: "#A68D6A",
          dark: "#63523B",
        },
        accent: "#D4AF37", // Warm metallic gold
        muted: {
          DEFAULT: "#E5E1DA",
          foreground: "#717171",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        border: "#EBE6E0",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
}
