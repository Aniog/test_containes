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
          DEFAULT: '#1B3A5C',
          light: '#2C5282',
          dark: '#0F2540',
        },
        accent: {
          DEFAULT: '#C44536',
          hover: '#A3382B',
        },
        surface: '#FFFFFF',
        bg: '#F8F9FA',
        border: '#E2E8F0',
        txt: {
          primary: '#1A202C',
          secondary: '#4A5568',
          muted: '#718096',
        },
        success: '#38A169',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
