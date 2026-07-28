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
          DEFAULT: '#1E3A5F',
          light: '#2D5A87',
          dark: '#152942',
        },
        accent: {
          DEFAULT: '#E67E22',
          hover: '#D35400',
        },
        success: '#27AE60',
        background: '#F8FAFC',
        'text-dark': '#1A1A2E',
        'text-muted': '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
