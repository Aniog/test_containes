/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        brand: {
          50:  "#eef5fb",
          100: "#d9e8f4",
          200: "#b4d0e9",
          300: "#83b1d7",
          400: "#4d8dbe",
          500: "#2a6ea3",
          600: "#1f5685",
          700: "#1a466c",
          800: "#173a5a",
          900: "#14314b",
          950: "#0d1f31",
        },
        accent: {
          50:  "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        ink: {
          50:  "#f7f8fa",
          100: "#eef0f4",
          200: "#dde2ea",
          300: "#bcc4d1",
          400: "#8b95a6",
          500: "#5d6678",
          600: "#3f4858",
          700: "#2c3340",
          800: "#1c2230",
          900: "#10141d",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 6px 18px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.05)',
        'brand': '0 8px 24px -8px rgba(31, 86, 133, 0.45)',
      },
    },
  },
  plugins: [],
}
