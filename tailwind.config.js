/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0a0a1a',
          medium: '#0d2137',
        },
        accent: {
          cyan: '#00e5ff',
          green: '#39ff14',
          magenta: '#c742f5',
        },
        surface: {
          dark: '#0f1b2d',
          card: '#112240',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
