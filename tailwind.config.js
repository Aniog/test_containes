/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF9F6", // Soft warm neutral
        foreground: "#2C2A26", // Deep charcoal/brown for text
        primary: {
          DEFAULT: "#8B7355", // Refined bronze/gold accent
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#EFEBE3",
          foreground: "#73706B",
        },
        accent: {
          DEFAULT: "#D8C7B0", // Soft sandy gold
          foreground: "#2C2A26"
        },
        border: "#E8E2D9"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
