/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: '#0a0f1e',
        'pitch-card': '#111827',
        'pitch-surface': '#1f2937',
        'soccer-green': '#16a34a',
        'soccer-green-light': '#22c55e',
        'soccer-yellow': '#facc15',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
