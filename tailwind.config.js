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
          DEFAULT: '#0c2d6b',
          dark: '#091f4a',
          light: '#1a4194',
        },
        accent: {
          DEFAULT: '#e85d26',
          hover: '#cf4d1b',
          light: '#fdf2ed',
        },
        surface: {
          DEFAULT: '#ffffff',
          light: '#f8fafc',
          gray: '#f1f5f9',
        },
        border: '#e2e8f0',
        'text-primary': '#0f172a',
        'text-secondary': '#475569',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
