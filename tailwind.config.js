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
          ink: "#0F2A47",
          "ink-soft": "#1B3A5C",
          "ink-muted": "#3A4A60",
          accent: "#E85D1A",
          "accent-dark": "#C84E13",
          "accent-soft": "#FFF2EA",
          mist: "#F4F6F9",
          line: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
