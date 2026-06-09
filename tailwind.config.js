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
          DEFAULT: '#0f2b4a',
          light: '#1a4a7a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          foreground: '#ffffff',
        },
        surface: '#f8fafc',
        border: '#e2e8f0',
        secondary: '#475569',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
