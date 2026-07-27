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
          50:  "#EAF0F8",
          100: "#D3E0EE",
          200: "#A6C0DD",
          300: "#7AA1CC",
          400: "#4D81BB",
          500: "#1B4A7A",
          600: "#1B4A7A",
          700: "#1B4A7A",
          800: "#13315C",
          900: "#0B2545",
        },
        accent: {
          50:  "#FDF3E8",
          100: "#FAE2C4",
          200: "#F5C78A",
          300: "#EFAD56",
          400: "#EA922F",
          500: "#E07A1F",
          600: "#C8651A",
          700: "#A14F12",
        },
        success: {
          500: "#16A34A",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
