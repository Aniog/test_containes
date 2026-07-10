/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0e1a',
        deep: '#0f1629',
        cyan: '#00d4ff',
        violet: '#8b5cf6',
        emerald: '#10b981',
      },
    },
  },
  plugins: [],
}
