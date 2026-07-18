/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#FDFBF7",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FDFBF7",
        },
        secondary: {
          DEFAULT: "#F5F1EA",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#C5A059",
          foreground: "#FDFBF7",
        },
        muted: {
          DEFAULT: "#71717A",
          foreground: "#FDFBF7",
        },
        border: "#E2E2E2",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        extra: ".4em",
      }
    },
  },
  plugins: [],
}
