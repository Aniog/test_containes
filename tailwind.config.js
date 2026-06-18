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
          DEFAULT: '#1a365d',
          light: '#2c5282',
          dark: '#0f2744',
        },
        accent: {
          DEFAULT: '#c53030',
          light: '#e53e3e',
          dark: '#9b2c2c',
        },
        gold: {
          DEFAULT: '#d69e2e',
          light: '#ecc94b',
          dark: '#b7791f',
        },
        surface: '#ffffff',
        background: '#f7fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
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
