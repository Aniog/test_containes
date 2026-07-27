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
          DEFAULT: '#1e3a5f',
          light: '#2d5a8e',
        },
        accent: {
          DEFAULT: '#e86c2e',
          hover: '#d45a1e',
        },
        surface: '#f8f9fb',
        border: '#e2e8f0',
        'text-primary': '#1a2332',
        'text-secondary': '#5a6a7e',
        'text-muted': '#8a9bb0',
        success: '#22a366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
