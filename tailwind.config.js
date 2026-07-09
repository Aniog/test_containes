/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          dark: '#0a0e1a',
          deeper: '#060912',
          cyan: '#00e5ff',
          teal: '#00bfa5',
          magenta: '#e040fb',
          purple: '#7c4dff',
          gold: '#ffd740',
          text: '#f0f4ff',
          muted: '#8892b0',
        },
      },
    },
  },
  plugins: [],
}
