/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          bg: '#0f0e0e',
          surface: '#1a1818',
          'surface-elevated': '#222020',
          'text-primary': '#f5f0eb',
          'text-secondary': '#a09890',
          gold: '#c9a96e',
          'gold-hover': '#d4b87a',
          border: '#2a2726',
          'border-light': '#3a3635',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
