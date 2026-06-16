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
          DEFAULT: '#0F1B2D',
          light: '#1A2D47',
          medium: '#253B58',
        },
        gold: {
          DEFAULT: '#C8973E',
          light: '#D4A94F',
          dark: '#B07E2F',
          muted: '#F5ECD7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F7F8FA',
          border: '#E2E6ED',
        },
        text: {
          primary: '#0F1B2D',
          secondary: '#5A6577',
          muted: '#8A94A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
