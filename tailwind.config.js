/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#1A1A1A",
        accent: "#B8860B",
        secondary: "#F2EBE3",
        border: "#E5E7EB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
