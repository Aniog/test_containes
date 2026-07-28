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
        secondary: {
          DEFAULT: '#c53030',
          light: '#e53e3e',
          dark: '#9b2c2c',
        },
        accent: {
          DEFAULT: '#d69e2e',
          light: '#ecc94b',
          dark: '#b7791f',
        },
        surface: '#ffffff',
        background: '#f7fafc',
        'text-primary': '#1a202c',
        'text-secondary': '#4a5568',
        'text-muted': '#718096',
        border: '#e2e8f0',
        success: '#38a169',
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
