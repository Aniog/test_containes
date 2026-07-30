/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3C6E',
        accent: '#C0392B',
        gold: '#D4A017',
        lightbg: '#F5F7FA',
        darktext: '#1A1A2E',
        bodytext: '#4A5568',
        border: '#E2E8F0',
        muted: '#718096',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
