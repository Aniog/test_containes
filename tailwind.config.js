/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#e94560',
          gold: '#c9a227',
          light: '#f5f5f5',
          dark: '#0f0f1a',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
