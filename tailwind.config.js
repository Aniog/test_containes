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
          dark: '#0a3560',
          light: '#1a6cb5',
        },
        accent: {
          DEFAULT: '#e67e22',
          dark: '#c45d0e',
          light: '#f39c12',
        },
        surface: '#f6f8fb',
        navy: '#0a192f',
        'text-primary': '#1a1a2e',
        'text-secondary': '#5a6270',
        'text-muted': '#8b93a3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        md: '6px',
        lg: '10px',
      },
    },
  },
  plugins: [],
}
