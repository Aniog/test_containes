/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1614",
          soft: "#2A2421",
        },
        cream: {
          DEFAULT: "#F5EFE7",
          warm: "#EFE6D8",
          paper: "#FAF6F0",
          edge: "#ECE3D4",
        },
        gold: {
          DEFAULT: "#B8956A",
          deep: "#8B6F4E",
          pale: "#D9C2A1",
        },
        muted: {
          DEFAULT: "#6B5D52",
          soft: "#8C7E72",
        },
        hairline: "#E5DDD0",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "'Times New Roman'", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        product: "0.18em",
        wider2: "0.15em",
      },
      maxWidth: {
        editorial: "1480px",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(26, 22, 20, 0.18)",
        card: "0 1px 0 rgba(26, 22, 20, 0.04), 0 18px 40px -28px rgba(26, 22, 20, 0.18)",
      },
    },
  },
  plugins: [],
}
