/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F7F5F2",
          surface: "#FFFFFF",
          ink: "#1C1917",
          muted: "#78716C",
          subtle: "#A8A29E",
          line: "#E7E5E4",
          accent: "#B45309",
          accentHover: "#92400E",
          warm: "#F5EFE6",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
}
