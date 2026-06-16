/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2744',
        'primary-light': '#2a3f6e',
        secondary: '#4a5568',
        accent: '#d4a853',
        'accent-hover': '#c49a45',
        surface: '#ffffff',
        background: '#f7f8fa',
        text: '#1a202c',
        'text-muted': '#4a5568',
        'text-light': '#718096',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
