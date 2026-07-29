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
          DEFAULT: '#0f4c81',
          dark: '#0a3a63',
          light: '#1a6ab0',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fbbf24',
        },
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          muted: '#94a3b8',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
}
