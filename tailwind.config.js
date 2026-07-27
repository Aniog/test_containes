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
          DEFAULT: '#0F4C75',
          dark: '#0A344D',
        },
        secondary: '#3282B8',
        accent: '#FF6B35',
        surface: '#FFFFFF',
        background: '#F7F9FB',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
        'text-muted': '#718096',
        border: '#E2E8F0',
        success: '#38A169',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
