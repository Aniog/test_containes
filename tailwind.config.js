/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1a2e',
        'secondary': '#16213e',
        'accent': '#e94560',
        'steel-gray': '#4a5568',
        'bg-light': '#f7fafc',
        'text-dark': '#2d3748',
        'text-muted': '#718096',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
