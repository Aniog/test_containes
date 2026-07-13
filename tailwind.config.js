/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4f8a',
          dark: '#163f6e',
          light: '#2563a8',
        },
        accent: {
          red: '#c0392b',
          'red-dark': '#a93226',
          gold: '#d4a017',
        },
        brand: {
          bg: '#f8f9fb',
          surface: '#ffffff',
          dark: '#1a2332',
          body: '#4a5568',
          muted: '#718096',
          border: '#e2e8f0',
          success: '#2d7d46',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
