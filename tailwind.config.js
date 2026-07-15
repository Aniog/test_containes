/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F9F7F2",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#71717A",
          foreground: "#71717A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widestest: '0.2em',
      },
    },
  },
  plugins: [],
}
