/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
          light: "#A78BFA",
        },
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FCD34D",
        },
        // Platform colors
        steam: "#1B2838",
        epic: "#2D2D2D",
        nintendo: "#E4000F",
        playstation: "#003087",
        xbox: "#107C10",
        // Dark theme
        dark: {
          bg: "#0F0F13",
          card: "#1A1A24",
          border: "#2A2A3A",
          muted: "#3A3A4A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F0F13 0%, #1A0A2E 50%, #0F0F13 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(124,58,237,0.1) 0%, rgba(26,26,36,0) 100%)",
        "platform-gradient": "linear-gradient(90deg, #7C3AED, #F59E0B)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

