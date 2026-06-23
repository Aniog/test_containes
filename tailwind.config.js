/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040b16',
        surface: '#0d1b2a',
        primary: '#00f5d4',
        secondary: '#f15bb5',
        accent: '#fee440',
        textMain: '#e0e1dd',
        textMuted: '#778da9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
