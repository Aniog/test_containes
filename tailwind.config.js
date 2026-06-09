/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4f8a',
        'primary-dark': '#0d2b4e',
        accent: '#c0392b',
        'light-blue': '#e8f0fb',
        'neutral-bg': '#f4f6f9',
        'text-dark': '#1a2332',
        'text-muted': '#5a6a7e',
        'border-color': '#dde3ec',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
