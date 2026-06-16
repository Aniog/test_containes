/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'am-bg': '#0f1115',
        'am-bg-secondary': '#181b21',
        'am-surface': '#1e222a',
        'am-gold': '#c9a45c',
        'am-gold-hover': '#d4b76a',
        'am-text': '#f0f0f0',
        'am-text-secondary': '#a0a8b8',
        'am-text-muted': '#6b7280',
        'am-border': '#2a2f3a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
